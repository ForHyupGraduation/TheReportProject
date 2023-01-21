from selenium.webdriver.common.by import By
from urllib.parse import urlparse

from crawler import GetComapnyMainPageURL
from crawler import GetUpjongPageURL
from crawler import CreateChromeDriver
from crawler import InitGrowthRates

from crawler import companyGrowthRates

import time
import random
import csv

def ChangeStringNumbersToFloatNumbers(arr):
    index = 0
    for element in arr:
        arr[index] = float(element.replace(',', ''))
        index += 1
    return arr

def GetCompanyCodes(upjongNumber):
    companyCodes = []
    driver = CreateChromeDriver()
    driver.get(GetUpjongPageURL(upjongNumber))

    time.sleep(random.randrange(5, 10))

    companyNameElements = driver.find_elements(By.CLASS_NAME, 'name_area')
    for companyNameElement in companyNameElements:
        result = urlparse(companyNameElement.find_element(By.TAG_NAME, 'a').get_attribute('href'))
        companyCodes.append(result.query.split("=")[1])
    
    driver.close()
    print(f"[+] {len(companyCodes)} Company Codes Extraction Complete")

    return companyCodes

def GetCompanyGrowthData(driver, companyCode):
    print(f"[+] Company Code {companyCode} Starts!")

    try:
        driver.get(GetComapnyMainPageURL(companyCode))
        time.sleep(random.randrange(5, 7))
        
        tbodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[4]/div[1]/table/tbody')
        trElements = tbodyElement.find_elements(By.TAG_NAME, 'tr')

        sales = []
        operatingProfits = []

        for trElement in trElements:
            if "매출액" in trElement.text and "매출액(억" not in trElement.text:
                if len(trElement.text.split(' ')) == 11:
                    sales = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:5])
                if len(trElement.text.split(' ')) == 13:
                    sales = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:3])

            if "영업이익" in trElement.text and "영업이익(억" not in trElement.text and "영업이익률" not in trElement.text and "영업이익증가율(%)" not in trElement.text:
                if len(trElement.text.split(' ')) == 11:
                    operatingProfits = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:5])
                if len(trElement.text.split(' ')) == 13:
                    operatingProfits = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:3])

        averageSalesGrowthRate = 0
        averageOperatingProfitsGrowthRate = 0

        if len(sales) != 0:
            averageSalesGrowthRate = sum(sales) / len(sales)
            
        if len(operatingProfits) != 0:
            averageOperatingProfitsGrowthRate = sum(operatingProfits) / len(operatingProfits)


        return companyGrowthRates(companyCode, averageSalesGrowthRate, averageOperatingProfitsGrowthRate)
    except:
        return companyGrowthRates(companyCode, 0, 0)
        

def DownloadGrowthDataSet(upjongNumbers):


    for upjongNumber in upjongNumbers:
        companyCodes = GetCompanyCodes(upjongNumber)
        InitGrowthRates(upjongNumber)

        driver = CreateChromeDriver()

        companyGrowthRatesDataSet = []
        
        for companyCode in companyCodes:
            companyGrowthRatesDataSet.append(GetCompanyGrowthData(driver, companyCode))
        
        with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            for companyGrowthRatesData in companyGrowthRatesDataSet:
                print(f"[+] {companyGrowthRatesData.companyCode} is stored in growthRates{upjongNumber}.csv file ")
                writer.writerow([
                    companyGrowthRatesData.companyCode,
                    companyGrowthRatesData.averageSalesGrowthRate,
                    companyGrowthRatesData.averageOperatingProfitsGrowthRate
                ])

        driver.close()
        print(f"[+] Success To Download All Growth Rates In {upjongNumber} Upjong!")
    
    
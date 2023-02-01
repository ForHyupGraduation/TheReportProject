from selenium.webdriver.common.by import By
from urllib.parse import urlparse

from crawling import GetComapnyMainPageURL
from crawling import GetUpjongPageURL
from crawling import CreateChromeDriver
from crawling import InitGrowthRates
from crawling import InitYearly

from crawling import companyGrowthRatesDataClass

import time
import random
import csv

def GetRatios(numbers):
    ratios = []
    if len(numbers) == 0 or 0 in numbers:
        return ratios
    else:
        for index in range(0, len(numbers) - 1):
            ratio = ((numbers[index + 1] - numbers[index]) / (numbers[index])) * 100
            ratios.append(float(ratio))
    return ratios

def ChangeStringNumbersToFloatNumbers(arr):
    index = 0
    for element in arr:
        arr[index] = float(element.replace(',', ''))
        index += 1
    return arr

def GetUpjongsNumbers(driver, onetime=False):
    driver.get("https://finance.naver.com/sise/sise_group.naver?type=upjong")
    time.sleep(random.randrange(5, 7))

    tbodyElement = driver.find_element(By.XPATH, '//*[@id="contentarea_left"]/table/tbody')
    trElements = tbodyElement.find_elements(By.TAG_NAME, 'tr')

    upjongNumbers = []
    for trElement in trElements:
        if "%" in trElement.text:
            query = urlparse(trElement.find_element(By.TAG_NAME, 'a').get_attribute('href')).query
            upjongNumbers.append(query.split('&')[1].replace('no=', ''))

    if onetime:
        driver.close()
        driver = None
    
    return upjongNumbers

def GetCompanyCodes(driver, upjongNumber, oneTime=False):
    companyCodes = []
    driver.get(GetUpjongPageURL(upjongNumber))
    time.sleep(random.randrange(5, 7))

    companyNames = driver.find_elements(By.CLASS_NAME, 'name_area')
    for companyName in companyNames:
        companyCode = urlparse(companyName.find_element(By.TAG_NAME, 'a').get_attribute('href')).query.split("=")[1]
        companyCodes.append(companyCode)

    if oneTime:
        driver.close()
        driver = None
    
    return companyCodes

def GetCompanyGrowthRates(driver, companyCode, oneTime = False):
    companyName = None
    yearlySalesGrowthRates = []
    yearlyOperatingProfitsGrowthRates = []

    try:
        driver.get(GetComapnyMainPageURL(companyCode))
        time.sleep(random.randrange(5, 7))

        companyName = driver.find_element(By.XPATH, '//*[@id="middle"]/div[1]/div[1]/h2/a').text
        tbodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[4]/div[1]/table/tbody')
        trElements = tbodyElement.find_elements(By.TAG_NAME, 'tr')

        yearlySales = []
        yearlyOperatingProfits = []

        for trElement in trElements:
            if "매출액" in trElement.text and "매출액(억" not in trElement.text:
                if len(trElement.text.split(' ')) == 11 or len(trElement.text.split(' ')) == 8:
                    yearlySales = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:5])
                elif len(trElement.text.split(' ')) == 13:
                    yearlySales = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:4])

            if "영업이익" in trElement.text and "영업이익(억" not in trElement.text and "영업이익률" not in trElement.text and "영업이익증가율(%)" not in trElement.text:
                if len(trElement.text.split(' ')) == 11 or len(trElement.text.split(' ')) == 8:
                    yearlyOperatingProfits = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:5])
                elif len(trElement.text.split(' ')) == 13:
                    yearlyOperatingProfits = ChangeStringNumbersToFloatNumbers(trElement.text.split(' ')[1:4])

        if oneTime:
            driver.close()
            driver = None

        yearlySalesGrowthRates = GetRatios(yearlySales)
        yearlyOperatingProfitsGrowthRates = GetRatios(yearlyOperatingProfits)

        averageYearlySalesGrowthRate = 0
        averageYearlyOperatingProfitsGrowthRate = 0

        if len(yearlySalesGrowthRates) != 0:
            averageYearlySalesGrowthRate = sum(yearlySalesGrowthRates) / len(yearlySalesGrowthRates)

        if len(yearlyOperatingProfitsGrowthRates) != 0:
            averageYearlyOperatingProfitsGrowthRate = sum(yearlyOperatingProfitsGrowthRates) / len(yearlyOperatingProfitsGrowthRates)
    
        return {
            "companyGrowthRatesData": companyGrowthRatesDataClass(companyName, companyCode, averageYearlySalesGrowthRate, averageYearlyOperatingProfitsGrowthRate),
            "yearlySales": yearlySales,
            "yearlyOperatingProfits": yearlyOperatingProfits
        }
    except:
        return {
            "companyGrowthRatesData": companyGrowthRatesDataClass(companyName, companyCode, 0, 0),
            "yearlySales": yearlySales,
            "yearlyOperatingProfits": yearlyOperatingProfits
        }



def DownloadGrowthDataSet(upjongNumber):
    driver = CreateChromeDriver()
    companyCodes = GetCompanyCodes(driver=driver, oneTime=False, upjongNumber=upjongNumber)

    InitGrowthRates(upjongNumber=upjongNumber)
    InitYearly(upjongNumber)

    for companyCode in companyCodes:
        companyGrowthRates = GetCompanyGrowthRates(driver=driver, companyCode=companyCode, oneTime=False)

        companyGrowthRatesData = companyGrowthRates["companyGrowthRatesData"]
        yearlySales = companyGrowthRates["yearlySales"]
        yearlyOperatingProfits = companyGrowthRates["yearlyOperatingProfits"]

        with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                companyGrowthRatesData.companyName, 
                companyGrowthRatesData.companyCode,
                companyGrowthRatesData.averageSalesGrowthRate,
                companyGrowthRatesData.averageOperatingProfitsGrowthRate
            ])
            pass

        with open(f"./data/yearly/sales/sales{upjongNumber}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            
            companyName = companyGrowthRatesData.companyName
            yearlySales.insert(0, companyCode)
            yearlySales.insert(0, companyName)

            writer.writerow(yearlySales)

        with open(f"./data/yearly/operatingProfits/operatingProfits{upjongNumber}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            
            companyName = companyGrowthRatesData.companyName
            yearlyOperatingProfits.insert(0, companyCode)
            yearlyOperatingProfits.insert(0, companyName)

            writer.writerow(yearlyOperatingProfits)


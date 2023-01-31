from selenium.webdriver.common.by import By
from urllib.parse import urlparse

from crawler import GetComapnyMainPageURL
from crawler import GetUpjongPageURL
from crawler import CreateChromeDriver

import os
import csv
import time
import random


def GetCompanyYearlySales(driver, companyCode):
    print(f"[+] Company Code {companyCode} Starts To Get Yearly Sales")
    try:
        driver.get(GetComapnyMainPageURL(companyCode))
        time.sleep(random.randrange(5, 7))

        tbodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[4]/div[1]/table/tbody')
        trElements = tbodyElement.find_elements(By.TAG_NAME, 'tr')

        sales = []

        for trElement in trElements:
            if "매출액" in trElement.text and "매출액(억" not in trElement.text:
                if len(trElement.text.split(' ')) == 11 or len(trElement.text.split(' ')) == 8:
                    sales = trElement.text.split(' ')[1:5]
                elif len(trElement.text.split(' ')) == 13:
                    sales = trElement.text.split(' ')[1:3]
        return sales
    except:
        return []


def GetCompanyYearlyOperatingProfits(driver, companyCode):
    print(f"[+] Company Code {companyCode} Starts To Get Yearly Opearing Profits")
    try:
        driver.get(GetComapnyMainPageURL(companyCode))
        time.sleep(random.randrange(5, 7))

        tbodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[4]/div[1]/table/tbody')
        trElements = tbodyElement.find_elements(By.TAG_NAME, 'tr')

        operatingProfits = []

        for trElement in trElements:
            if "영업이익" in trElement.text and "영업이익(억" not in trElement.text and "영업이익률" not in trElement.text and "영업이익증가율(%)" not in trElement.text:
                if len(trElement.text.split(' ')) == 11 or len(trElement.text.split(' ')) == 8:
                    operatingProfits = trElement.text.split(' ')[1:5]
                elif len(trElement.text.split(' ')) == 13:
                    operatingProfits = trElement.text.split(' ')[1:3]
        
        return operatingProfits
    except:
        return []


def DownloadCompanyYearlySales(companyCode):
    driver = CreateChromeDriver()
    driver.get(GetComapnyMainPageURL(companyCode))

    time.sleep(random.randrange(3, 7))

    companyName = driver.find_element(By.XPATH, '//*[@id="middle"]/div[1]/div[1]/h2/a').text
    sales = GetCompanyYearlySales(driver, companyCode)

    if not os.path.exists("./data/yearly/sales"):
        os.makedirs('./data/yearly/sales')

    with open(f"./data/yearly/sales/sales{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
        header = ["companyName", "companyCode", "salesFourYearsAgo", "salesThreeYearsAgo", "salesTwoYearsAgo", "salesOneYearAgo"]
        writer.writerow(header)

    sales.insert(0, companyCode)
    sales.insert(0, companyName)

    with open(f"./data/yearly/sales/sales{companyCode}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(sales)

    print(f"[+] Success To Download Sales For {companyName}")

def DownloadCompanyYearlyOpearingProfits(companyCode):
    driver = CreateChromeDriver()
    driver.get(GetComapnyMainPageURL(companyCode))

    time.sleep(random.randrange(3, 7))

    companyName = driver.find_element(By.XPATH, '//*[@id="middle"]/div[1]/div[1]/h2/a').text
    operatingProfits = GetCompanyYearlyOperatingProfits(driver, companyCode)

    if not os.path.exists('./data/yearly/operatingProfits'):
        os.makedirs('./data/yearly/operatingProfits')

    with open(f"./data/yearly/operatingProfits/operatingProfits{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
        header = ["companyName", "companyCode", "operatingProfitsFourYearsAgo", "operatingProfitsThreeYearsAgo", "operatingProfitsTwoYearsAgo", "operatingProfitsOneYearAgo"]
        writer.writerow(header)

    operatingProfits.insert(0, companyCode)
    operatingProfits.insert(0, companyName)

    with open(f"./data/yearly/operatingProfits/operatingProfits{companyCode}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(operatingProfits)

    print(f"[+] Success To Download Operating Profits For {companyName}")

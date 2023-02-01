from selenium.webdriver.common.by import By

from crawling import CreateChromeDriver
from crawling import GetFinanceVolumeURL
from crawling import InitVolume

from crawling import volumeDataClass

import time
import random
import csv

def GetVolumeDataSetFromCSV(companyCode):
    volumeDataSet = []
    with open(f"./data/volume/volume{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            newVolumeData = volumeDataClass(row[0], row[1], row[2], float(row[3]))
            volumeDataSet.append(newVolumeData)
    return volumeDataSet

def GetVolumeDataSet(driver, volumeDataSet, companyCode):
    companyName = driver.find_element(By.XPATH, '//*[@id="middle"]/div[1]/div[1]/h2/a').text
    tBodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[2]/table[1]/tbody')
    tdElements = tBodyElement.find_elements(By.XPATH, 'tr')

    for tdElement in tdElements:
        if not ("날짜" in tdElement.text or "순매매량" in tdElement.text or None or tdElement.text == "" or tdElement.text == " "):
            tdDate = tdElement.find_elements(By.TAG_NAME, 'td')[0].text
            volume = tdElement.find_elements(By.TAG_NAME, 'td')[4].text
            newVolumeData = volumeDataClass(companyName, companyCode, tdDate, int(volume.replace(',', '')))
            volumeDataSet.append(newVolumeData)
    return volumeDataSet

def DownloadVolumeDataSet(companyCode, lastPageNumber):
    driver = CreateChromeDriver()
    InitVolume(companyCode)
    for pageNumber in range(1, lastPageNumber + 1):
        driver.get(GetFinanceVolumeURL(companyCode, pageNumber))
        volumeDataSet = GetVolumeDataSet(driver, GetVolumeDataSetFromCSV(companyCode), companyCode)
        with open(f"./data/volume/volume{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            for volumeData in volumeDataSet:
                writer.writerow([volumeData.companyName, companyCode, volumeData.volumeDate, volumeData.volume])
        print(f"[+] Sucess To Crawl The Volume In {volumeData.companyName} {pageNumber} Page Number")
        time.sleep(random.randrange(5, 7))
    driver.close()
    print(f"[+] Success To Download volume{companyCode}.csv In ./data/volume")
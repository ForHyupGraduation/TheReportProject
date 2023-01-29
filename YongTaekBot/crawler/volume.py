from selenium.webdriver.common.by import By

from crawler import CreateChromeDriver
from crawler import GetFinanceVolumeURL
from crawler import InitVolume

from crawler import volumePerDay

import time
import random
import csv

def GetVolumeDataSetFromCSV(companyCode, firstPageNumber, lastPageNumber):
    volumeDataSet = []
    with open(f"./data/volume/volume{companyCode}-{firstPageNumber}to{lastPageNumber}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            volumeDataSet.append(volumePerDay(row[0] ,row[1], row[2], float(row[3])))
    
    return volumeDataSet

def GetVolumeDataSet(driver, volumeDataSet, companyCode):
    companyName = driver.find_element(By.XPATH, '//*[@id="middle"]/div[1]/div[1]/h2/a').text
    tBodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[2]/table[1]/tbody')
    tdElements = tBodyElement.find_elements(By.XPATH, 'tr')

    for tdElement in tdElements:
        if "날짜" in tdElement.text or "순매매량" in tdElement.text or None or tdElement.text == "" or tdElement.text == " ":
            pass
        else:
            tdDate = tdElement.find_elements(By.TAG_NAME, 'td')[0].text
            volume = tdElement.find_elements(By.TAG_NAME, 'td')[4].text
            newVolumePerDay = volumePerDay(companyName, companyCode, tdDate, int(volume.replace(',', '')))
            volumeDataSet.append(newVolumePerDay)
            
    return volumeDataSet

def DownloadVolumeDataSetFromFirstToLast(companyCode, firstPageNumber, lastPageNumber):
    driver = CreateChromeDriver()
    InitVolume(companyCode, firstPageNumber, lastPageNumber)
    for pageNumber in range(firstPageNumber, lastPageNumber + 1):
        driver.get(GetFinanceVolumeURL(companyCode, pageNumber))
        volumeDataSet = GetVolumeDataSet(driver, GetVolumeDataSetFromCSV(companyCode, firstPageNumber, lastPageNumber), companyCode)
        with open(f"./data/volume/volume{companyCode}-{firstPageNumber}to{lastPageNumber}.csv", 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            for volumeData in volumeDataSet:
                writer.writerow([volumeData.companyName, volumeData.companyCode, volumeData.volumeDate, volumeData.volume])
        print(f"[+] {companyCode} - {volumeData.companyName} Company Code: {pageNumber} Page Complete!")
        time.sleep(random.randrange(5, 7))
    driver.close()
    print(f"[+] Success To Download {companyCode} Volume CSV File!")

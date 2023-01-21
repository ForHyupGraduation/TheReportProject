from selenium.webdriver.common.by import By

from crawler import CreateChromeDriver
from crawler import GetFinanceVolumeURL
from crawler import InitVolume

from crawler import volumePerDay

import time
import random
import csv

def GetVolumeDataSetFromCSV(companyCode):
    volumeDataSet = []
    with open(f"./data/volume/volume{companyCode}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            volumeDataSet.append(volumePerDay(row[0], float(row[1])))
    
    return volumeDataSet

def GetVolumeDataSet(driver, volumeDataSet):
    tBodyElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[2]/table[1]/tbody')
    tdElements = tBodyElement.find_elements(By.XPATH, 'tr')

    for tdElement in tdElements:
        if "날짜" in tdElement.text or "순매매량" in tdElement.text or None or tdElement.text == "" or tdElement.text == " ":
            pass
        else:
            tdDate = tdElement.find_elements(By.TAG_NAME, 'td')[0].text
            volume = tdElement.find_elements(By.TAG_NAME, 'td')[4].text
            volumeDataSet.append(volumePerDay(tdDate, int(volume.replace(',', ''))))
            
    return volumeDataSet

def DownloadVolumeDataSet(companyCodes, pageNumber):
    for companyCode in companyCodes:
        driver = CreateChromeDriver()
        InitVolume(companyCode)

        for pageNumber in range(1, pageNumber + 1):
            driver.get(GetFinanceVolumeURL(companyCode, pageNumber))

            volumeDataSet = GetVolumeDataSet(driver, GetVolumeDataSetFromCSV(companyCode))
            
            with open(f"./data/volume/volume{companyCode}.csv", 'w', newline='') as csvfile:
                writer = csv.writer(csvfile)
                for volumeData in volumeDataSet:
                    writer.writerow([volumeData.volumeDate, volumeData.volume])
            
            print(f"[+] {companyCode} Company Code: {pageNumber} Page Complete!")
            time.sleep(random.randrange(10, 15))
        
        driver.close()
        print(f"[+] Success To Download {companyCode} Volume CSV File!")
        time.sleep(random.randrange(10, 15))
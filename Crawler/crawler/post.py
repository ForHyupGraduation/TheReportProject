from selenium.webdriver.common.by import By

from crawler import CreateChromeDriver
from crawler import GetFinanceBoardURL
from crawler import InitPost

from crawler import postsPerDay

import time
import random
import csv

def GetPostDataSetFromCSV(companyCode):
    postDataSet = []
    with open(f"./data/post/post{companyCode}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            postDataSet.append(postsPerDay(row[0], row[1]))
    return postDataSet

def GetPostDataSet(driver, postDataSet):
    tableElement = driver.find_element(By.XPATH, '//*[@id="content"]/div[2]/table[1]')
    tdElements = tableElement.find_elements(By.TAG_NAME, 'td')

    for tdElement in tdElements:
        if "20" in tdElement.text and ":" in tdElement.text and "." in tdElement.text:
            tdTime = tdElement.text.split(' ')[0]
            postData = next(
                (postData for postData in postDataSet if postData.postingDate == tdTime),
                None
            )
            if postData is not None:
                postData.posts = int(postData.posts) + 1
            else:
                postDataSet.append(postsPerDay(tdTime, 1))
    
    return postDataSet


def DownloadPostDataSet(companyCodes, pageNumber):
    for companyCode in companyCodes:
        InitPost(companyCode)
        driver = CreateChromeDriver()

        for pageNumber in range(1, pageNumber + 1):
            driver.get(GetFinanceBoardURL(companyCode, pageNumber))
            time.sleep(random.randrange(5, 7))
            
            postDataSet = GetPostDataSet(driver, GetPostDataSetFromCSV(companyCode))

            with open(f"./data/post/post{companyCode}.csv", 'w', newline='') as csvfile:
                writer = csv.writer(csvfile)
                for postData in postDataSet:
                    writer.writerow([postData.postingDate, postData.posts])

            print(f"[+] {companyCode} Company Code: {pageNumber} Page Number Complete!")
            time.sleep(random.randrange(10, 15))
        
        driver.close()
        print(f"[+] {companyCode} Success To Download")
        time.sleep(random.randrange(10, 15))
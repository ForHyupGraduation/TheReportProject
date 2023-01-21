
from normalization import companyGrowthRates

import os
import csv

def GetnormalizedSalesGrowthRateDataSet(companyGrowthRatesDataSet, minAverageSalesGrowthRate, maxAverageSalesGrowthRate):
    normalizedSalesGrowthRateDataSet = []
    
    for companyGrowthRatesData in companyGrowthRatesDataSet:
        normalizedSalesGrowthRateData = ((companyGrowthRatesData.averageSalesGrowthRate - minAverageSalesGrowthRate) / (maxAverageSalesGrowthRate - minAverageSalesGrowthRate))
        normalizedSalesGrowthRateDataSet.append(normalizedSalesGrowthRateData)

    return normalizedSalesGrowthRateDataSet

def GetnormalizedOperatingProfitsGrowthRateDataSet(companyGrowthRatesDataSet, minAverageOperatingProfitsGrowthRate, maxAverageOperatingProfitsGrowthRate):
    normalizedOperatingProfitsGrowthRateDataSet = []

    for companyGrowthRatesData in companyGrowthRatesDataSet:
        normalizedOperatingProfitsGrowthRateData = ((companyGrowthRatesData.averageOperatingProfitsGrowthRate - minAverageOperatingProfitsGrowthRate) / (maxAverageOperatingProfitsGrowthRate - minAverageOperatingProfitsGrowthRate))
        normalizedOperatingProfitsGrowthRateDataSet.append(normalizedOperatingProfitsGrowthRateData)
    
    return normalizedOperatingProfitsGrowthRateDataSet

def GetAllCompanyGrowthRatesInfo(upjongNumber):
    if not os.path.exists("./data/growthRates"):
        os.makedirs("./data/growthRates")

    companyGrowthRatesDataSet = []
    
    minAverageSalesGrowthRate = 0
    maxAverageSalesGrowthRate = 0
    
    minAverageOperatingProfitsGrowthRate = 0
    maxAverageOperatingProfitsGrowthRate = 0

    with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            companyGrowthRate = companyGrowthRates(row[0], float(row[1]), float(row[2]))
            if minAverageSalesGrowthRate >= float(row[1]):
                minAverageSalesGrowthRate = float(row[1])
            if maxAverageSalesGrowthRate <= float(row[1]):
                maxAverageSalesGrowthRate = float(row[1])
            
            if minAverageOperatingProfitsGrowthRate >= float(row[2]):
                minAverageOperatingProfitsGrowthRate = float(row[2])
            if maxAverageOperatingProfitsGrowthRate <= float(row[2]):
                maxAverageOperatingProfitsGrowthRate = float(row[2])
            
            companyGrowthRatesDataSet.append(companyGrowthRate)

    return { 
        "companyGrowthRatesDataSet": companyGrowthRatesDataSet, 
        "minAverageSalesGrowthRate": minAverageSalesGrowthRate, 
        "maxAverageSalesGrowthRate": maxAverageSalesGrowthRate, 
        "minAverageOperatingProfitsGrowthRate": minAverageOperatingProfitsGrowthRate,
        "maxAverageOperatingProfitsGrowthRate": maxAverageOperatingProfitsGrowthRate
    }
    

def DownloadNormalizedGrowthDataSet(upjongNumber):
    allCompanyGrowthRatesInfo = GetAllCompanyGrowthRatesInfo(upjongNumber)

    if not os.path.exists("./data/growthRates/normalized"):
        os.makedirs("./data/growthRates/normalized")

    with open(f"./data/growthRates/normalized/growthRates{upjongNumber}.csv", 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        index = 0

        normalizedSalesGrowthRateDataSet = GetnormalizedSalesGrowthRateDataSet(allCompanyGrowthRatesInfo["companyGrowthRatesDataSet"], allCompanyGrowthRatesInfo["minAverageSalesGrowthRate"], allCompanyGrowthRatesInfo["maxAverageSalesGrowthRate"])
        normalizedOperatingProfitsGrowthRateDataSet = GetnormalizedOperatingProfitsGrowthRateDataSet(allCompanyGrowthRatesInfo["companyGrowthRatesDataSet"], allCompanyGrowthRatesInfo["minAverageOperatingProfitsGrowthRate"], allCompanyGrowthRatesInfo["maxAverageOperatingProfitsGrowthRate"])

        for companyGrowthRatesData in allCompanyGrowthRatesInfo["companyGrowthRatesDataSet"]:
            writer.writerow([companyGrowthRatesData.companyCode, normalizedSalesGrowthRateDataSet[index], normalizedOperatingProfitsGrowthRateDataSet[index]])
            index += 1
    
    print(f"[+] Download Success: Normalized Growth Rates Data Set From {upjongNumber} Upjong Number ")
    return True
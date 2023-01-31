from normalization import companyGrowthRates
from normalization import GetNormalizationValue

import csv
import os
import math

def GetCsvFileNames():
    csvFileNames = []
    for path in os.listdir('./data/growthRates'):
        if path.endswith('.csv'):
            csvFileNames.append(path)
    return csvFileNames
    

def GetGrowthRatesDataSetFromCSV(upjongNumber):
    minAverageSalesGrowthRate = math.inf
    maxAverageSalesGrowthRate = 0

    minAverageOperatingProfitsGrowthRate = math.inf
    maxAverageOperatingProfitsGrowthRate = 0

    growthRatesDataSet = []

    with open(f"./data/growthRates/header/add_header_growthRates{upjongNumber}.csv", 'r', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            growthRatesData = companyGrowthRates(row[0], row[1], float(row[2]), float(row[3]))
            if minAverageSalesGrowthRate >= float(row[2]):
                minAverageSalesGrowthRate = float(row[2])
            if maxAverageSalesGrowthRate <= float(row[2]):
                maxAverageSalesGrowthRate = float(row[2])
            
            if minAverageOperatingProfitsGrowthRate >= float(row[3]):
                minAverageOperatingProfitsGrowthRate = float(row[3])
            if maxAverageOperatingProfitsGrowthRate <= float(row[3]):
                maxAverageOperatingProfitsGrowthRate = float(row[3])
        
            growthRatesDataSet.append(growthRatesData)

    return {
        "growthRatesDataSet": growthRatesDataSet,
        "minAverageSalesGrowthRate": minAverageSalesGrowthRate,
        "maxAverageSalesGrowthRate": maxAverageSalesGrowthRate,
        "minAverageOperatingProfitsGrowthRate": minAverageOperatingProfitsGrowthRate,
        "maxAverageOperatingProfitsGrowthRate": maxAverageOperatingProfitsGrowthRate
    }

def GetNormalizedGrowthRates(upjongNumber):
    growthRatesDataSetInfo = GetGrowthRatesDataSetFromCSV(upjongNumber)
    
    if not os.path.exists('./data/growthRates/header/normalizedGrowthRates'):
        os.makedirs("./data/growthRates/header/normalizedGrowthRates")

    with open(f"./data/growthRates/header/normalizedGrowthRates/normalizedGrowthRates{upjongNumber}.csv", 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        header = ['companyName', 'companyCode', 'averageSalesGrowthRate', 'averageOperatingProfitsGrowthRate']
        writer.writerow(header)

    for growthRatesData in growthRatesDataSetInfo['growthRatesDataSet']:

        normalizedAverageSalesGrowthRates = GetNormalizationValue(
            growthRatesData.averageSalesGrowthRate,
            growthRatesDataSetInfo['minAverageSalesGrowthRate'],
            growthRatesDataSetInfo['maxAverageSalesGrowthRate']
        )
        normalizedAverageOpearingProfitsGrowthRate = GetNormalizationValue(
            growthRatesData.averageOperatingProfitsGrowthRate,
            growthRatesDataSetInfo['minAverageOperatingProfitsGrowthRate'],
            growthRatesDataSetInfo['maxAverageOperatingProfitsGrowthRate']
        )


        with open(f"./data/growthRates/header/normalizedGrowthRates/normalizedGrowthRates{upjongNumber}.csv", 'a', newline='', encoding='utf-8') as csvfile:
            writer = csv.writer(csvfile)
            
            writer.writerow([
                growthRatesData.companyName,
                growthRatesData.companyCode,
                round(normalizedAverageSalesGrowthRates, 2),
                round(normalizedAverageOpearingProfitsGrowthRate, 2)
            ])

    print(f"[+] {upjongNumber} Done!")
    
from normalization import companyGrowthRates
from normalization import GetNormalizationValue

import csv
import os

def GetCsvFileNames():
    csvFileNames = []
    for path in os.listdir('./data/growthRates'):
        if path.endswith('.csv'):
            csvFileNames.append(path)
    return csvFileNames
    

def GetGrowthRatesDataSetFromCSV(upjongNumber):
    minAverageSalesGrowthRate = 0
    maxAverageSalesGrowthRate = 0

    minAverageOperatingProfitsGrowthRate = 0
    maxAverageOperatingProfitsGrowthRate = 0

    growthRatesDataSet = []

    with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'r') as csvfile:
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


        with open(f"./data/growthRates/normalizedGrowthRates/normalizedGrowthRates{upjongNumber}.csv", 'a', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                growthRatesData.companyName,
                growthRatesData.companyCode,
                round(normalizedAverageSalesGrowthRates, 2),
                round(normalizedAverageOpearingProfitsGrowthRate, 2)
            ])

    print(f"[+] {upjongNumber} Done!")
    
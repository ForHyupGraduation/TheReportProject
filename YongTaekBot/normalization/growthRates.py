from crawling import companyGrowthRatesDataClass

from normalization import GetNormalizationValue
from normalization import InitNormalizedGrowthRates


import csv
import os
import math

def GetGrowthRates(upjongNumber):
    minAverageSalesGrowthRate = math.inf
    maxAverageSalesGrowthRate = 0

    minAverageOperatingProfitsGrowthRate = math.inf
    maxAverageOperatingProfitsGrowthRate = 0

    growthRatesDataSet = []
    
    with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'r', encoding='UTF-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            newGrowthRatesData = companyGrowthRatesDataClass(row[0], row[1], float(row[2]), float(row[3]))
            if minAverageSalesGrowthRate >= float(row[2]):
                minAverageSalesGrowthRate = float(row[2])
            if maxAverageSalesGrowthRate <= float(row[2]):
                maxAverageSalesGrowthRate = float(row[2])

            if minAverageOperatingProfitsGrowthRate >= float(row[3]):
                minAverageOperatingProfitsGrowthRate = float(row[3])
            if maxAverageOperatingProfitsGrowthRate <= float(row[3]):
                maxAverageOperatingProfitsGrowthRate = float(row[3])

            growthRatesDataSet.append(newGrowthRatesData)
    
    return {
        "growthRatesDataSet": growthRatesDataSet,
        "minAverageSalesGrowthRate": minAverageSalesGrowthRate,
        "maxAverageSalesGrowthRate": maxAverageSalesGrowthRate,
        "minAverageOperatingProfitsGrowthRate": minAverageOperatingProfitsGrowthRate,
        "maxAverageOperatingProfitsGrowthRate": maxAverageOperatingProfitsGrowthRate
    }

def DownloadNormalizedGrowthRates(upjongNumber):
    growthRates = GetGrowthRates(upjongNumber)
    
    minAverageSalesGrowthRate = growthRates["minAverageSalesGrowthRate"]
    maxAverageSalesGrowthRate = growthRates["maxAverageSalesGrowthRate"]
    minAverageOperatingProfitsGrowthRate = growthRates["minAverageOperatingProfitsGrowthRate"]
    maxAverageOperatingProfitsGrowthRate = growthRates["maxAverageOperatingProfitsGrowthRate"]

    for growthRateData in growthRates["growthRatesDataSet"]:
        normalizedAverageSalesGrowthRates = GetNormalizationValue(
            growthRateData.averageSalesGrowthRate,
            minAverageSalesGrowthRate,
            maxAverageSalesGrowthRate
        )
        
        normalizedAverageOperatingProfitsGrowthRates = GetNormalizationValue(
            growthRateData.averageOperatingProfitsGrowthRate,
            minAverageOperatingProfitsGrowthRate,
            maxAverageOperatingProfitsGrowthRate
        )

        with open(f"./data/growthRates/normalized/growthRates{upjongNumber}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                growthRateData.companyName,
                growthRateData.companyCode,
                round(normalizedAverageSalesGrowthRates, 2),
                round(normalizedAverageOperatingProfitsGrowthRates, 2)
            ])
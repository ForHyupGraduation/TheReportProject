import os
import csv


class companyGrowthRates:
    def __init__(self, companyName, companyCode, averageSalesGrowthRate, averageOperatingProfitsGrowthRate) -> None:
        self.companyName = companyName
        self.companyCode = companyCode
        self.averageSalesGrowthRate = averageSalesGrowthRate
        self.averageOperatingProfitsGrowthRate = averageOperatingProfitsGrowthRate
    


def GetNormalizationValue(val, minVal, maxVal):
    if maxVal - minVal == 0:
        return 0
    else:
        return (val - minVal) / (maxVal - minVal)


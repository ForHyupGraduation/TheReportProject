import os

def GetNormalizationValue(val, minVal, maxVal):
    if maxVal - minVal == 0 or val - minVal == 0:
        return 1
    else:
        return (val - minVal) / (maxVal - minVal)

def Init():
    if not os.path.exists("./data/growthRates/normalized"):
        os.makedirs("./data/growthRates/normalized")
    
    if not os.path.exists("./data/interest/normalized"):
        os.makedirs("./data/interest/normalized")

def InitNormalizedGrowthRates(upjongNumber):
    with open(f"./data/interest/normalized/growthRates{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        pass

def InitNormalizedInterest(companyCode):
    with open(f"./data/interest/normalized/interest{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        pass

Init()
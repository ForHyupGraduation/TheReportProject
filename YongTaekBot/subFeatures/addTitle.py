import os
import csv

interestTitle = [
    "companyName",
    "companyCode",
    "date",
    "postPerDay",
    "tradingPerDay"
]

normalizedGrowth = [
    "companyName",
    "companyCode",
    "averageSalesGrowthRate",
    "averageOperatingProfitsGrowthRate"
]

interestDbPath = "../../DB/interests"
normalizedGrowthRatesDBPath = "../../DB/normalizedGrowthRates"



def AddInterestTitle():
    interestFileNames = []
    for path in os.listdir("../DB/interests"):
        if path.endswith(".csv"):
            interestFileNames.append(path)

    for interestFileName in interestFileNames:
        interests = []
        with open(f"../DB/interests/{interestFileName}", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                interests.append(row)
        
        with open(f"../DB/interests/{interestFileName}", 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(interestTitle)
            for interest in interests:
                writer.writerow(interest)
    print("[+] Success To Add Title")

def AddNormalizedGrowthRatesTitle():
    growthRatesFileNames = []

    for path in os.listdir("../DB/normalizedGrowthRates"):
        if path.endswith('.csv'):
            growthRatesFileNames.append(path)
    
    for growthRatesFileName in growthRatesFileNames:
        growthRates = []
        with open(f"../DB/normalizedGrowthRates/{growthRatesFileName}", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                growthRates.append(row)
        
        with open(f'../DB/normalizedGrowthRates/{growthRatesFileName}', 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(normalizedGrowth)
            for growthRate in growthRates:
                writer.writerow(growthRate)
    
    print("[+] Success To Add Growth Rates")

def AddNormalizedInterestsTitle():
    interestsFileNames = []
    
    for path in os.listdir("../DB/normalizedInterests"):
        if path.endswith(".csv"):
            interestsFileNames.append(path)

    for interestsFileName in interestsFileNames:
        interests = []
        index = 0

        with open(f"../DB/normalizedInterests/{interestsFileName}", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                if index > 0:
                    interests.append(row)
                index += 1
        
        with open(f"../DB/normalizedInterests/{interestsFileName}", 'w', encoding='UTF-8', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(interestTitle)
            for interest in interests:
                writer.writerow(interest)
    
    print("[+] Success To Add Title")
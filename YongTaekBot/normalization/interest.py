from merge import Interest
from normalization import GetNormalizationValue

import csv
import os

def GetCsvFileNames():
    csvFileNames = []
    for path in os.listdir('./data/interest'):
        if path.endswith('.csv'):
            csvFileNames.append(path)
    return csvFileNames

def GetInterestsFromCSV(companyCode):
    minPosts = 0
    maxPosts = 0

    minVolume = 0
    maxVolume = 0

    interests = []

    with open(f"./data/interest/interest{companyCode}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            interest = Interest(row[0], row[1], row[2], float(row[3]), float(row[4]))
            if minPosts >= float(row[3]):
                minPosts = float(row[3])
            if maxPosts <= float(row[3]):
                maxPosts = float(row[3])

            if minVolume >= float(row[4]):
                minVolume = float(row[4])
            if maxVolume <= float(row[4]):
                maxVolume = float(row[4])
            
            interests.append(interest)
    return {
        "interests": interests,
        "minPosts": minPosts,
        "maxPosts": maxPosts,
        "minVolume": minVolume,
        "maxVolume": maxVolume
    }
            

def GetEncodingInterestsFromCSV(companyCode):
    minPosts = 0
    maxPosts = 0

    minVolume = 0
    maxVolume = 0

    interests = []

    with open(f"./data/interest/encoding/encoding_interest{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            interest = Interest(row[0], row[1], row[2], float(row[3]), float(row[4]))
            if minPosts >= float(row[3]):
                minPosts = float(row[3])
            if maxPosts <= float(row[3]):
                maxPosts = float(row[3])

            if minVolume >= float(row[4]):
                minVolume = float(row[4])
            if maxVolume <= float(row[4]):
                maxVolume = float(row[4])
            
            interests.append(interest)
    return {
        "interests": interests,
        "minPosts": minPosts,
        "maxPosts": maxPosts,
        "minVolume": minVolume,
        "maxVolume": maxVolume
    }

def DownloadNormalizedInterests(companyCode):
    interests = GetInterestsFromCSV(companyCode)

    with open(f"./data/interest/normalizedInterest/interests{companyCode}.csv", 'w', newline='') as csvfile:
        pass
    
    for interest in interests['interests']:
        normalizedPosts = round(GetNormalizationValue(
            interest.posts,
            interests['minPosts'],
            interests['maxPosts']
        ), 2)

        normalizedVolume = round(GetNormalizationValue(
            interest.volume,
            interests['minVolume'],
            interests['maxVolume']
        ), 2)

        with open(f"./data/interest/normalizedInterest/normalizedInterest{companyCode}.csv", 'a', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                interest.companyName,
                companyCode,
                interest.companyDate,
                normalizedPosts,
                normalizedVolume
            ])

    print(f"[+] Success To Download normalizedInterest{companyCode}.csv!")


def DownloadEncodingNormalizedInterests(companyCode):
    interests = GetInterestsFromCSV(companyCode)

    if not os.path.exists("./data/interest/encoding/normalizedInterest"):
        os.makedirs('./data/interest/encoding/normalizedInterest')

    with open(f"./data/interest/encoding/normalizedInterest/interest{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow([
            "companyName",
            "companyCode",
            "companyDate",
            "postsPerDay",
            "volumePerDay"
        ])
        pass
    
    for interest in interests['interests']:
        normalizedPosts = round(GetNormalizationValue(
            interest.posts,
            interests['minPosts'],
            interests['maxPosts']
        ), 2)

        normalizedVolume = round(GetNormalizationValue(
            interest.volume,
            interests['minVolume'],
            interests['maxVolume']
        ), 2)

        with open(f"./data/interest/encoding/normalizedInterest/interest{companyCode}.csv", 'a', newline='', encoding='UTF-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([
                interest.companyName,
                companyCode,
                interest.companyDate,
                normalizedPosts,
                normalizedVolume
            ])

    print(f"[+] Success To Download normalizedInterest{companyCode}.csv!")

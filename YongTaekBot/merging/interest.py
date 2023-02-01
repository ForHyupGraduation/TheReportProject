from merging import InterestDataClass

from merging import InitInterest

import os
import csv

def GetCompanyCodesInVolumeDir():
    companyCodesInVolumeDir = []
    for path in os.listdir("./data/volume"):
        if path.endswith('.csv'):
            companyCodesInVolumeDir.append(path.split('.')[0].split('e')[1])
    return companyCodesInVolumeDir

def GetCompanyCodesInPostDir():
    companyCodesInPostDir = []
    for path in os.listdir("./data/post"):
        if path.endswith('.csv'):
            companyCodesInPostDir.append(path.split('.')[0].split('t')[1])
    return companyCodesInPostDir

def GetDuplicatedCompanyCodes():
    duplicatedCompanyCodes = []
    companyCodesInPostDir = GetCompanyCodesInPostDir()
    companyCodesInVolumeDir = GetCompanyCodesInVolumeDir()

    for companyCodeInPostDir in companyCodesInPostDir:
        for companyCodeInVolumeDir in companyCodesInVolumeDir:
            if companyCodeInPostDir == companyCodeInVolumeDir:
                duplicatedCompanyCodes.append(companyCodeInPostDir)
    
    return duplicatedCompanyCodes

def GetInterests(companyCode):
    interests = []
    with open(f"./data/post/post{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            newInterestData = InterestDataClass(row[0], row[1], row[2], row[3], None)
            interests.append(newInterestData)
    with open(f"./data/volume/volume{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            for interest in interests:
                if row[2] == interest.companyDate:
                    interest.volume = row[3]
                    pass
        return interests

def GetInterestsWithoutNoneValues(interests):
    interestsWithoutNoneValues = []
    for interest in interests:
        if interest.volume != None:
            interestsWithoutNoneValues.append(interest)
    return interestsWithoutNoneValues

def DownloadInterests(companyCode):
    interests = GetInterestsWithoutNoneValues(GetInterests(companyCode))
    companyCode = interests[0].companyCode
    InitInterest(companyCode)
    with open(f"./data/interest/interest{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
        for interest in interests:
            writer.writerow([
                interest.companyName,
                interest.companyCode,
                interest.companyDate,
                interest.posts,
                interest.volume
            ])
    print(f"[+] Success To Download interest{companyCode}.csv In ./data/interest")
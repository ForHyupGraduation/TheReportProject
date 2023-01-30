from merge import Interest


import os
import csv

def GetCompanyCodesInVolumeDir():
    companyCodesInVolumeDir = []

    for path in os.listdir("./data/volume"):
            
        if path.endswith('.csv'):
            companyCode = path.split('.')[0].split('e')[1]
            companyCodesInVolumeDir.append(companyCode)
    return companyCodesInVolumeDir

def GetCompanyCodesInPostDir():
    companyCodesInPostDir = []
    for path in os.listdir("./data/post"):
        if path.endswith('.csv'):
            companyCode = path.split('.')[0].split('t')[1]
            companyCodesInPostDir.append(companyCode)
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

def GetInterests(duplicatedCompanyCode):
    interests = []
    with open(f"./data/post/post{duplicatedCompanyCode}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            interest = Interest(row[0], row[1], row[2], row[3], None)
            interests.append(interest)
    with open(f"./data/volume/volume{duplicatedCompanyCode}.csv", 'r') as csvfile:
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

def DownloadInterests(interests):
    if not os.path.exists('./data/interest'):
        os.makedirs('./data/interest')
    
    companyCode = interests[0].companyCode
    with open(f"./data/interest/interest{companyCode}.csv", 'w', newline='') as csvfile:
        pass

    with open(f"./data/interest/interest{companyCode}.csv", 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for interest in interests:
            writer.writerow([interest.companyName, interest.companyCode, interest.companyDate, interest.posts, interest.volume])
    
    print(f"[+] Complete To Success interest{companyCode}.csv File!")
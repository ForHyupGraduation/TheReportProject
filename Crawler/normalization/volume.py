from normalization import volumePerDay

import os
import csv

def GetNormalizedVolumeDataSet(volumeDataSet, minVolume, maxVolume):
    normalizedVolumeDataSet = []

    for volumeData in volumeDataSet:
        normalizedVolumeData = ((volumeData.volume - minVolume) / (maxVolume - minVolume))
        normalizedVolumeDataSet.append(normalizedVolumeData)

    return normalizedVolumeDataSet

def GetAllVolumeInfo(companyCode):
    if not os.path.exists("./data/volume"):
        os.makedirs("./data/volume")

    volumeDataSet = []
    
    minVolume = 0
    maxVolume = 0
    
    with open(f"./data/volume/volume{companyCode}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            volumeData = volumePerDay(row[0], float(row[1]))

            if minVolume >= float(row[1]):
                minVolume = float(row[1])
            if maxVolume <= float(row[1]):
                maxVolume = float(row[1])
            
            volumeDataSet.append(volumeData)

    return {
        "volumeDataSet": volumeDataSet,
        "minVolume": minVolume,
        "maxVolume": maxVolume
    }

def DownloadNormalizedVolumeDataSet(companyCode):
    allVolumeInfo = GetAllVolumeInfo(companyCode)

    if not os.path.exists("./data/volume/normalized"):
        os.makedirs("./data/volume/normalized")
        
    with open(f"./data/volume/normalized/volume{companyCode}.csv", 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        index = 0
        
        normalizedVolumeDataSet = GetNormalizedVolumeDataSet(allVolumeInfo["volumeDataSet"], allVolumeInfo["minVolume"], allVolumeInfo["maxVolume"])
        
        index = 0
        for volumeData in allVolumeInfo["volumeDataSet"]:
            writer.writerow([volumeData.volumeDate, normalizedVolumeDataSet[index]])
            index += 1

    print(f"[+] Download Success: Normalized Volume Data Set From {companyCode} Company Code ")
    return True
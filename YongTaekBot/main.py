import os
import csv 
import math

companyCodes = []

for path in os.listdir("./data/interestBackup"):
    if path.endswith('.csv'):
        companyCodes.append(path.split('.')[0].split('t')[2])

for companyCode in companyCodes:
    minPosts = math.inf
    maxPosts = 0

    minVolume = math.inf
    maxVolume = 0

    companyName = None

    try:
        with open(f"./data/interestBackup/interest{companyCode}.csv", 'r') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                companyName = row[0]
                companyCode = row[1]
                
                if minPosts >= float(row[3]):
                    minPosts = float(row[3])
                if maxPosts <= float(row[3]):
                    maxPosts = float(row[3])

                if minVolume >= float(row[4]):
                    minVolume = float(row[4])
                if maxVolume <= float(row[4]):
                    maxVolume = float(row[4])
                
    except:
        with open(f"./data/interestBackup/interest{companyCode}.csv", 'r', encoding='UTF-8') as csvfile:
            reader = csv.reader(csvfile)
            for row in reader:
                companyName = row[0]
                companyCode = row[1]
                
                if minPosts >= float(row[3]):
                    minPosts = float(row[3])
                if maxPosts <= float(row[3]):
                    maxPosts = float(row[3])

                if minVolume >= float(row[4]):
                    minVolume = float(row[4])
                if maxVolume <= float(row[4]):
                    maxVolume = float(row[4])

    with open(f"./minMax.csv", 'a', newline='', encoding='UTF-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow([
            companyName,
            companyCode,
            minPosts,
            maxPosts,
            minVolume,
            maxVolume
        ])
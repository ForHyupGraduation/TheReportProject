import os
import math
import csv

def GetMaxMinInterest(companyCode):
    minPosts = math.inf
    maxPosts = 0

    minVolume = math.inf
    maxVolume = 0

    companyName = None

    with open(f"./data/interest/interest{companyCode}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            posts = float(row[3])
            volume = float(row[4])
            
            if minPosts >= float(row[3]):
                minPosts = posts
            if maxPosts <= float(row[3]):
                maxPosts = posts
            if minVolume >= float(row[4]):
                minVolume = volume
            if maxVolume <= float(row[4]):
                maxVolume = volume

            companyName = row[0]

    return {
        "companyName": companyName,
        "companyCode": companyCode,
        "minPosts": minPosts,
        "maxPosts": maxPosts,
        "minVolume": minVolume,
        "maxVolume": maxVolume
    }

def DownloadMaxMin(companyCode):
    minMaxInterest = GetMaxMinInterest(companyCode)
    
    if not os.path.exists('./data/maxMin'):
        os.makedirs("./data/maxMin")
    
    with open(f"./data/maxMin/maxMin{companyCode}.csv", 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["companyName", "companyCode", "minPosts", "maxPosts", "minVolume", "maxVolume"])
        writer.writerow([
            minMaxInterest["companyName"],
            minMaxInterest["companyCode"],
            minMaxInterest["minPosts"],
            minMaxInterest["maxPosts"],
            minMaxInterest["minVolume"],
            minMaxInterest["maxVolume"]
        ])

    print(f"[+] Success To Download {companyCode} Company Code.")
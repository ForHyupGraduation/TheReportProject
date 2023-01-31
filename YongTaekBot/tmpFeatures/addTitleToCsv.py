from normalization import companyGrowthRates
from merge import Interest

import os
import csv

def addTitleToGrowthRates(upjongNumber):
    if not os.path.exists("./data/growthRates/header"):
        os.makedirs("./data/growthRates/header")
    with open(f"./data/growthRates/header/add_header_growthRates{upjongNumber}.csv", 'wt', newline='') as csvfile:
        pass

    with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'r') as readerCsvFile:
        with open(f"./data/growthRates/header/add_header_growthRates{upjongNumber}.csv", 'w', newline='', encoding='utf-8') as writerCsvFile:
            reader = csv.reader(readerCsvFile)
            writer = csv.writer(writerCsvFile)

            header = ['companyName', 'companyCode', 'averageSalesGrowthRate', 'averageOperatingProfitsRate']
            
            writer.writerow(header)
            for row in reader:
                print(row)
                writer.writerow([row[0], row[1], row[2], row[3]])

    print(f"[+] Success To Download add_header_growthRates{upjongNumber}.csv File")

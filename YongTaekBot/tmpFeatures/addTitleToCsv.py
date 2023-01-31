from normalization import companyGrowthRates
from merge import Interest

import os
import csv

def addTitleToGrowthRates(upjongNumber):
    if not os.path.exists("./data/growthRates/header"):
        os.makedirs("./data/growthRates/header")
    with open(f"./data/growthRates/header/add_header_growthRates{upjongNumber}.csv", 'w', newline='', encoding='utf-8') as csvfile:
        pass

    with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'r') as readerCsvfile:
        reader = csv.reader(readerCsvfile)
        with open(f"./data/growthRates/header/add_header_growthRates{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as writerCsvfile:
            writer = csv.writer(writerCsvfile)    
        
            for row in reader:
                
                writer.writerow([row[0], row[1], row[2], row[3]])
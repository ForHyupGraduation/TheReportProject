import os
import csv

def ChangeInterestEncoding(companyCode):
    if not os.path.exists("./data/interest/encoding"):
        os.makedirs('./data/interest/encoding')
    
    with open(f"./data/interest/encoding/interest{companyCode}.csv", 'w', newline='', encoding='utf-8') as csvfile:
        pass

    with open(f"./data/interest/interest{companyCode}.csv", 'r') as readerCsvFile:
        reader = csv.reader(readerCsvFile)
        with open(f"./data/interest/encoding/encoding_interest{companyCode}.csv", 'w', newline='', encoding='UTF-8') as writerCsvFile:
            writer = csv.writer(writerCsvFile)
            for row in reader:
                writer.writerow([row[0], row[1], row[2], row[3], row[4]])
    
    print(f"[+] Success To Download encoding_interest{companyCode}.csv File")
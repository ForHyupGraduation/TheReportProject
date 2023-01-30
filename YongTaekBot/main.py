from normalization.interest import DownloadNormalizedInterests

import os

companyCodes = []

for path in os.listdir("./data/interest"):
    if path.endswith('.csv'):
        print(path)
        companyCodes.append(path.split('.')[0].split('t')[2])

for companyCode in companyCodes:
    DownloadNormalizedInterests(companyCode)
from normalization.interest import DownloadNormalizedInterests
from tmpFeatures.addTitleToCsv import addTitleToGrowthRates
from normalization.growthRates import GetNormalizedGrowthRates

import os
import csv

upjongNumbers = []

for path in os.listdir("./data/growthRates/header"):
    if path.endswith('.csv'):
        upjongNumber = path.split('.')[0].split('s')[1]
        upjongNumbers.append(upjongNumber)

for upjongNumber in upjongNumbers:
    GetNormalizedGrowthRates(upjongNumber)
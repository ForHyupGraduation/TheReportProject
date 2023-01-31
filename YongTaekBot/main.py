from tmpFeatures.MaxMin import GetMaxMinInterest, DownloadMaxMin
from normalization.interest import DownloadEncodingNormalizedInterests
from normalization.interest import GetEncodingInterestsFromCSV
from tmpFeatures.changeEncoding import ChangeInterestEncoding
from normalization.growthRates import GetGrowthRatesDataSetFromCSV
from normalization.growthRates import GetNormalizedGrowthRates

import os
import csv
import math


for path in os.listdir('./data/growthRates/header'):
    if path.endswith('.csv'):
        upjongNumber = path.split('.')[0].split('s')[1]
        GetNormalizedGrowthRates(upjongNumber)

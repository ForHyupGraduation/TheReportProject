from tmpFeatures.MaxMin import GetMaxMinInterest, DownloadMaxMin
from normalization.interest import DownloadEncodingNormalizedInterests
from normalization.interest import GetEncodingInterestsFromCSV
from tmpFeatures.changeEncoding import ChangeInterestEncoding

import os
import csv
import math

for path in os.listdir("./data/interest"):
    if path.endswith('.csv'):
        companyCode = path.split('.')[0].split('t')[2]
        DownloadMaxMin(companyCode)

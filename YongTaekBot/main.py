from normalization.interest import DownloadNormalizedInterests
from normalization.interest import DownloadEncodingNormalizedInterests
from tmpFeatures.addTitleToCsv import addTitleToGrowthRates
from tmpFeatures.changeEncoding import ChangeInterestEncoding
from normalization.growthRates import GetNormalizedGrowthRates

from crawler.yearly import DownloadCompanyYearlySales
from crawler.yearly import DownloadCompanyYearlyOpearingProfits

import os
import csv


for path in os.listdir('./data/interest'):
    if path.endswith('.csv'):
        companyCode = path.split('.')[0].split('t')[2]
        DownloadCompanyYearlySales(companyCode)
        DownloadCompanyYearlyOpearingProfits(companyCode)


#DownloadCompanyYearlySales("036570")
#DownloadCompanyYearlyOpearingProfits("036570")


from crawler.volume import DownloadVolumeDataSetFromFirstToLast
from crawler.post import DownloadPostDataSetFromFirstToLast

from normalization.growthRates import GetNormalizedGrowthRates
from normalization.growthRates import GetCsvFileNames

for csvFileName in GetCsvFileNames():
    upjongNumber = csvFileName.split('.')[0].split('s')[1]
    GetNormalizedGrowthRates(upjongNumber)

#GetNormalizedGrowthRates("287")
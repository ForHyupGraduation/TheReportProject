from crawler.growtRates import GetCompanyCodes
from crawler.post import DownloadPostDataSet
from crawler.volume import DownloadVolumeDataSet

postLastPageNumber = 65
volumeLastPageNumber = 8

companyCodes = GetCompanyCodes("263")[10:20]

for companyCode in companyCodes:
    DownloadPostDataSet(companyCode, postLastPageNumber)
    DownloadVolumeDataSet(companyCode, volumeLastPageNumber)
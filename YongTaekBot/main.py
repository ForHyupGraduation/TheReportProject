from normalization.interest import DownloadNormalizedInterests
from tmpFeatures.addTitleToCsv import addTitleToGrowthRates

import os

for path in os.listdir("./data/growthRates/normalizedGrowthRates"):
    if path.endswith(".csv"):
        code = path.split('.')[0].split('s')[1]
        addTitleToGrowthRates(code)
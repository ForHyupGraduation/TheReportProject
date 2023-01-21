class companyGrowthRates:
    def __init__(self, companyCode, averageSalesGrowthRate, averageOperatingProfitsGrowthRate) -> None:
        self.companyCode = companyCode
        self.averageSalesGrowthRate = averageSalesGrowthRate
        self.averageOperatingProfitsGrowthRate = averageOperatingProfitsGrowthRate

class postsPerDay:
    def __init__(self, postingDate, posts) -> None:
        self.postingDate = postingDate
        self.posts = posts

class volumePerDay:
    def __init__(self, volumeDate, volume) -> None:
        self.volumeDate = volumeDate
        self.volume = volume
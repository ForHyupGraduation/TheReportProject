from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import os
import random

userAgents = [
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v4508262480646156115 t2724773385614408303 athe94ac249 altpriv cvcv=2 cexpw=1 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 RuxitSynthetic/1.0 v350698073514718533 t3155812531728514435 ath5ee645e0 altpriv cvcv=2 cexpw=1 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 RuxitSynthetic/1.0 v6334276057 t510411245971543851 athfa3c3975 altpub cvcv=2 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 RuxitSynthetic/1.0 v491986598790186106 t6769821651176646736 ath93eb305d altpriv cvcv=2 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 RuxitSynthetic/1.0 v18393577958 t1174822708520405417 athfa3c3975 altpub cvcv=2 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 RuxitSynthetic/1.0 v3058354753863187016 t4154490152187741889 ath259cea6f altpriv cvcv=2 cexpw=1 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 RuxitSynthetic/1.0 v6910203816081838139 t8481217466818261426 ath5ee645e0 altpriv cvcv=2 cexpw=1 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 RuxitSynthetic/1.0 v5612560728114210084 t3231659453990505946 ath5ee645e0 altpriv cvcv=2 cexpw=1 smf=0",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 RuxitSynthetic/1.0 v4850371992185074761 t1441800946268025921 ath1fb31b7a altpriv cvcv=2 cexpw=1 smf=0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 RuxitSynthetic/1.0 v18393608008 t1174822708520405417 athfa3c3975 altpub cvcv=2 smf=0",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v3383688943362115700 t6331743126571670211",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4328380191064107652 t3345461284722333977",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v67995022930940461 t1191530496833852085",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v5925979502413891997 t7607367907735283829",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8522292750030998420 t1236787695256497497",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v6975285913526153630 t7607367907735283829",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v6755563214039260218 t6281935149377429786",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v5345910913165380682 t7889551165227354132",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4257800642506449862 t7889551165227354132",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1291693581987738488 t4157550440124640339",
"Mozilla/5.0 (Linux; Android 9; SM-A505FN Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/79.0.3945.136 Mobile Safari/537.36 Instagram 126.0.0.25.121 Android (28/9; 420dpi; 1080x2131; samsung; SM-A505FN; a50; exynos9610; ru_RU; 195435560)",
"Mozilla/5.0 (Linux; arm_64; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 YaBrowser/19.12.4.87.00 Mobile Safari/537.36",
"Mozilla/5.0 (Linux; Android 9; A6_mini) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36",
"Mozilla/5.0 (Linux; Android 7.1.1; SM-J510FN Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36 YandexSearch/6.45",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 YaBrowser/20.2.1.248 Yowser/2.5 Yptp/1.56 Safari/537.36",
"Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone8,1;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/ru_RU;FBOP/5;FBCR/MegaFon]",
"Mozilla/5.0 (Linux; Android 9; ZTE Blade A5 2020RU) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36",
"Mozilla/5.0 (Linux; Android 9; VKY-L09) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Mobile Safari/537.36",
"Mozilla/5.0 (Linux; Android 6.0; PMT3518_4GE Build/MRA58K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.124 YaBrowser/19.6.0.158 (lite) Safari/537.36",
"Mozilla/5.0 (Linux; U; Android 6.0.1; ru-ru; MI 4W Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.141 Mobile Safari/537.36 XiaoMi/MiuiBrowser/11.4.3-g",
]

class companyGrowthRatesDataClass:
    def __init__(self, companyName, companyCode, averageSalesGrowthRate, averageOperatingProfitsGrowthRate) -> None:
        self.companyName = companyName
        self.companyCode = companyCode
        self.averageSalesGrowthRate = averageSalesGrowthRate
        self.averageOperatingProfitsGrowthRate = averageOperatingProfitsGrowthRate

class postDataClass:
    def __init__(self, companyName, companyCode, postingDate, posts) -> None:
        self.companyName = companyName
        self.companyCode = companyCode
        self.postingDate = postingDate
        self.posts = posts

class volumeDataClass:
    def __init__(self, companyName, companyCode, volumeDate, volume) -> None:
        self.companyName = companyName
        self.companyCode = companyCode
        self.volumeDate = volumeDate
        self.volume = volume


def InitCrawling():
    if not os.path.exists("./data"):
        os.makedirs("./data")

    if not os.path.exists("./data/post"):
        os.makedirs("./data/post")

    if not os.path.exists("./data/volume"):
        os.makedirs("./data/volume")

    if not os.path.exists("./data/growthRates"):
        os.makedirs("./data/growthRates")

    if not os.path.exists("./data/yearly"):
        os.makedirs("./data/yearly")

    if not os.path.exists("./data/yearly/sales"):
        os.makedirs("./data/yearly/sales")
    
    if not os.path.exists("./data/yearly/operatingProfits"):
        os.makedirs("./data/yearly/operatingProfits")


def InitPost(companyCode):
    with open(f"./data/post/post{companyCode}.csv", 'w', newline='') as csvfile:
        pass

def InitVolume(companyCode):
    with open(f"./data/volume/volume{companyCode}.csv", 'w', newline='') as csvfile:
        pass

def InitGrowthRates(upjongNumber):
    with open(f"./data/growthRates/growthRates{upjongNumber}.csv", 'w', newline='') as csvfile:
        pass

def InitYearly(upjongNumber):
    with open(f"./data/yearly/sales/sales{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        pass
    with open(f"./data/yearly/operatingProfits/operatingProfits{upjongNumber}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        pass
    
def GetFinanceVolumeURL(companyCode, pageNumber):
    return f"https://finance.naver.com/item/frgn.naver?code={companyCode}&page={pageNumber}"

def GetFinanceBoardURL(companyCode, pageNumber):
    return f"https://finance.naver.com/item/board.naver?code={companyCode}&page={pageNumber}"

def GetComapnyMainPageURL(companyCode):
    return f"https://finance.naver.com/item/main.naver?code={companyCode}"

def GetUpjongPageURL(upjongNumber):
    return f"https://finance.naver.com/sise/sise_group_detail.naver?type=upjong&no={upjongNumber}"

def CreateChromeDriver():
    options = webdriver.ChromeOptions()
    options.add_argument("disable-gpu")
    options.add_argument("lang=ko_KR")
    options.add_argument(
        userAgents[random.randrange(0, len(userAgents))]
    )

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    return driver

InitCrawling()
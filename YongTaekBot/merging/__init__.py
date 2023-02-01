import os

class InterestDataClass:
    def __init__(self, companyName, companyCode, companyDate, posts, volume) -> None:
        self.companyName = companyName
        self.companyCode = companyCode
        self.companyDate = companyDate
        self.posts = posts
        self.volume = volume

def Init():
    if not os.path.exists('./data/interest'):
        os.makedirs("./data/interest")

def InitInterest(companyCode):
    with open(f"./data/interest/interest{companyCode}.csv", 'w', newline='', encoding='UTF-8') as csvfile:
        pass

Init()
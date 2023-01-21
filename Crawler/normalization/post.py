from normalization import postsPerDay

import os
import csv

def GetNormalizedPostDataSet(postDataSet, minPost, maxPost):
    normalizedPostDataSet = []

    for postData in postDataSet:
        normalizedPostData = ((postData.posts - minPost) / (maxPost - minPost))
        normalizedPostDataSet.append(normalizedPostData)
    
    return normalizedPostDataSet

def GetAllPostInfo(companyCode):
    if not os.path.exists("./data/post"):
        os.makedirs("./data/post")
    
    postDataSet = []

    minPost = 0
    maxPost = 0

    with open(f"./data/post/post{companyCode}.csv", 'r') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            postData = postsPerDay(row[0], float(row[1]))
            
            if minPost >= float(row[1]):
                minPost = float(row[1])
            
            if maxPost <= float(row[1]):
                maxPost = float(row[1])

            postDataSet.append(postData)
    
    return {
        "postDataSet": postDataSet,
        "minPost": minPost,
        "maxPost": maxPost
    }

def DownloadNormalizedPostDataSet(companyCode):
    allPostInfo = GetAllPostInfo(companyCode)
    
    if not os.path.exists("./data/post/normalized"):
        os.makedirs("./data/post/normalized")
    
    with open(f"./data/post/normalized/post{companyCode}.csv", 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        index = 0
        
        normalizedPostDataSet = GetNormalizedPostDataSet(allPostInfo["postDataSet"], allPostInfo["minPost"], allPostInfo["maxPost"])

        index = 0
        for postData in allPostInfo["postDataSet"]:
            writer.writerow([postData.postingDate, normalizedPostDataSet[index]])
            index += 1

    print(f"[+] Download Success: Normalized Post Data Set From {companyCode} Company Code ")
    return True
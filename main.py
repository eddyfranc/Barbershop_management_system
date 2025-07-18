import pymongo
# pymongo_version = pymongo.version
# print(pymongo_version)

from pymongo import MongoClient
cluster=MongoClient("mongodb+srv://eddyfrank:Reigns3#@cluster0.sbh4blk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db=cluster["Barbershop"]
collection=db["test"]

documents={"_id":1,"name": "franky", "Age":20, "year":2025, "ismarried":False, "isworking":True, "salary":100}
# post2={"_id":2,"name": "eddy", "Age":10, "year":2025, "ismarried":False, "isworking":False, "salary":100}

collection.insert_one(documents)

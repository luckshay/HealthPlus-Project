import os, json
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv('../../.env')

MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI)
db = client["testuser"]


def get_counts():
        counts = {
            "countUser": db["users"].count_documents({}),
        }
        return json.dumps(counts)

print(get_counts())

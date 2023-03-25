import os, json
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv('../../.env')

MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI)
db = client["testuser"]

count_recipient = {"userType":"Recipient"}
count_professionals = {"userType":"Healthcare Professional"}
count_facilities = {"userType":"Healthcare Facility"}
count_camps = {"userType":"Blood Donation Camp"}
def get_counts():
        counts = {
            "countRecipient": db["users"].count_documents(count_recipient),
            "countProfessionals": db["users"].count_documents(count_professionals),
            "countFacilities": db["users"].count_documents(count_facilities),
            "countCamps": db["users"].count_documents(count_camps)
        }
        return json.dumps(counts)

print(get_counts())

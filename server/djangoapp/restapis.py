import requests
import os
from dotenv import load_dotenv

load_dotenv()

backend_url = os.getenv('backend_url', default="https://brefo006-3030.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai")
sentiment_analyzer_url = os.getenv('sentiment_analyzer_url', default="https://sentianalyzer.26qa8xwk91za.us-south.codeengine.appdomain.cloud/")

def get_request(endpoint, **kwargs):
    params = ""
    if(kwargs):
        for key,value in kwargs.items():
            params=params+key+"="+value+"&"

    request_url = backend_url.rstrip('/') + '/' + endpoint.lstrip('/') + "?" + params

    print("GET from {} ".format(request_url))
    try:
        response = requests.get(request_url)
        return response.json()
    except Exception as e:
        print(f"Network exception occurred: {e}")
        return []

# ENSURE THIS NAME IS EXACTLY AS BELOW
def analyze_review_sentiments(text):
    request_url = sentiment_analyzer_url.rstrip('/') + "/analyze/" + text
    try:
        response = requests.get(request_url)
        return response.json()
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return {"sentiment": "neutral"} # Fallback

def post_review(data_dict):
    request_url = backend_url.rstrip('/') + "/insert_review"
    try:
        response = requests.post(request_url, json=data_dict)
        return response.json()
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return {"status": 500}
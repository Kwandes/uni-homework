from typing import Union

import requests
from fastapi import FastAPI

app = FastAPI()

# Run with uvicorn main:app --reload


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/call-api")
def _():
    response = requests.get('http://127.0.0.1:3000/endpoint')
    print(response.content)
    return response.content


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

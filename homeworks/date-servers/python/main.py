
import datetime

import uvicorn
from fastapi import FastAPI

# Run with poetry shell && uvicorn main:app --port 3000 --reload

serverPort = 3000  # no used when running via uvicorn
app = FastAPI()


@app.get("/healthcheck")
def read_root():
    return {"status": "Running", "port": serverPort}


@app.get("/timestamp")
def read_root():
    return datetime.datetime.utcnow().astimezone().isoformat()


# Only triggered when run via python3 main.py, not uvicorn main:app
if __name__ == '__main__':
    port = 3000
    host = '127.0.0.1'
    uvicorn.run(
        "main:app",
        port=port,
        host=host,
        reload=True
    )
    print(f"Server running on port {serverPort}")

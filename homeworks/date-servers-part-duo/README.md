# Date Time servers part Uno

You should create two new servers (important that you don’t reuse the same two servers from this weeks’ other assignment since loose coupling is emphasized during this course). Both will be the “date authority” and when GET requesting /timestamp provide a current timestamp (ISO 8601).

## Running the applications

### Node

**Requirements:**

- Node 16+

Once you enter the node directory with `cd node-js`, install the dependencies with `npm install`.

Once that is done, you can run the api on [localhost:3001](http://localhost:3001) with `npm start` (live-reload via nodemon) or `node index.js`

#### Node API endpoints

- [localhost:3001/healthcheck](http://localhost:3001/healthcheck)
- [localhost:3001/timestamp](http://localhost:3001/timestamp)
- [localhost:3001/ntp](http://localhost:3001/timestamp)

### Python

**Requirements:**

- Python 3.10.0+
- Poetry

Once you enter the node directory with `cd python`, install the dependencies with `poetry install` (pip might work but I didn't care enough to test for it).

Once that is done, enter the peotry shell with `poetry shell`, and run the api on [localhost:3001](http://localhost:3001) with `python main.py` (`python3 main.py` on mac) or `uvicorn main:app --port 3000 --reload`.

#### Python API endpoints

- [localhost:3000/healthcheck](http://localhost:3000/healthcheck)
- [localhost:3000/timestamp](http://localhost:3000/timestamp)
- [localhost:3000/ntp](http://localhost:3000/timestamp)

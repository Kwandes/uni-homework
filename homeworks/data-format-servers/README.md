# Data Format servers

Create at least two servers in two different programming languages with REST APIs. Create endpoints that read the files that you created last week, parse them and send them as response. You must figure out what data format to send as response.

You are allowed to split the responsibility between the servers if you are pressed for time. I.e. ServerA reads XML, CSV. ServerB reads YAML, TXT, JSON.

I have gone with the following file types:

- JSON
- YAML
- XML
- CSV
- TEXT

The files are located in the [files](./files) directory

Parsed them in the following languages:

- Javascript with Node - all file types
- Golang - only JSON and YAML. XML was attempted but failed

## Running the projects

### Node

#### Requirements:

- Node 16 or newer
- NPM

Installation:

`cd node-js && npm install`

Running the program:

`cd node-js && node index.js`

#### Node API endpoints

- [localhost:3000/healthcheck](http://localhost:3001/healthcheck)
- [localhost:3000/files/json](http://localhost:3001/files/json)
- [localhost:3000/files/yaml](http://localhost:3001/files/yaml)
- [localhost:3000/files/xml](localhost:3001/files/xml)
- [localhost:3000/files/csv](http://localhost:3001/files/csv)
- [localhost:3000/files/txt](http://localhost:3001/files/txt)

### Golang

#### Requirements:

- Go

Installation:

`cd go && go mod tidy`

Running the program:

`cd go && go run .`

#### Go API endpoints

- [localhost:3000/healthcheck](http://localhost:3000/healthcheck)
- [localhost:3000/files/json](http://localhost:3000/files/json)
- [localhost:3000/files/yaml](http://localhost:3000/files/yaml)

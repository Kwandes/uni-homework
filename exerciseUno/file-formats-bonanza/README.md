# File Formats BONANZA!

Parse files of different data types into something the app can understand.

I have gone with the following file types:

- JSON
- YAML
- XML
- CSV
- TEXT

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

### Golang

#### Requirements:

- Go

Installation:

`cd go && go mod tidy`

Running the program:

`cd go && go run .`

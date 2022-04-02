# basic-http-server
Test ExpressJS Server to Convert XML to JSON

Barebones ExpressJS server with minimal error handling, used for testing for a project

## Prerequisites
- NodeJS v16.4.2
- npm (included with Node)

## Setup
1. Clone this repo
2. Open Terminal/Command Prompt and `cd` into the repo folder
3. `npm install`

## Running the Server
`npm run dev`

The server will run on port 4000.

## Route to Test
POST request to:
`localhost:4000/xmldata/:serial_num/:date`

- :serial_num = 5-digit number (eg. 12345)
- :date = current date in YYYYMMDD format

Pass XML body to this route

### Expected Response from Route

```
{
    success: true,
    xmltojson: JSON of XML passed
}
```
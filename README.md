# Project Name

API Endpoints
  1. GET (/api/products/:product_id)
    Gets the product information based on the params of product_id
  2. POST (/api/products)
    Pass in JSON object containing the product information
    For example:
    ```javascript
      {
        "id": 300,
        "description": "test product to send",
        "title": "Test Product",
        "brand": "Test TM",
        "name": "The Tester",
        "age": "21",
        "player_Count": "Too many",
        "part_Number": "1231839",
        "GTIN": 5
      }
    ```
  3. PUT (/api/products)
    Pass in JSON object containing the updated product information
    Required to pass in all product information
  4. DELETE (/api/products)
    Pass in JSON object with key id containing the product id to delete

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

# Postgres
  1. Installation
    brew install postgresql
  2. Create database
    Run `createdb products`
  3. Generate the CSV file with mock data
    Run `npm run seed-csv`
  4. Seed informations table for database
    From the root of the project directory, run `psql products -f database/postgres/schema.sql`
    Schema was successfully created if "CREATE TABLE" and "COPY 10000000" shows up in the terminal

# CouchDB
  1. Installation
    Download CouchDB from https://couchdb.apache.org/#download
  2. Create Database
    Launch CouchDB which launches the interface Fauxton
    Set up an account with username & password, and create a database called products
  3. Generating the CSV file
    Run `npm run seed-csv-index`
  4. Seed CouchDB database
    Open a terminal window, navigate to this project directory.
    Run `cat seedIndex.csv | couchimport --url http://user:password@localhost:5984 --db products --delimiter ','`
    Total insertion of database can take anywhere from 40-50 minutes.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


<img src='https://i.imgur.com/9MucwB6.png' width=400 >

Table of Contents
-----------------
- [Description](#Description)
- [Getting Started](#Getting-Started)
  * [Dependencies](#Dependencies)
  * [Set up](#Set-up)
- [Database Selection](#Database-Selection)
  * [Schema](#PostgreSQL-Schema)
  * [PostgreSQL](#PostgreSQL)
  * [CouchDB](#CouchDB)
- [API Endpoints](#API-Endpoints)
- [Application Example](#Application-Example)

Description
-----------
Inherited legacy component that was designed to mimic the product information page on Google Shopping. This component was furthur developed to seed 10 million records into the database into a different database (PostgreSQL), and deployed for production via AWS EC2.

Getting Started
---------------

### Dependencies
1. Node >= 6.13.0
2. PostgreSQL 13.1
3. CouchDB 3.1.1 *(optional)*

### Set up
1. Run `npm install` to install the neccesary dependencies.
2. Seed the database (Refer to [Database Selection](#Database-Selection))
3. Run `npm run react-dev` to compile all public files into a bundle.
4. Run `npm run server-dev` to serve up the files at port 3004.

Database Selection
------------------
This project has been optimized with PostgreSQL and is the preferred database for this application. However, CouchDB is still a valid option - although it has not been optimized for production.

### Schema
  <img src='https://i.imgur.com/bhBGQhS.png' width=200>

### PostgreSQL
1. Install PostgreSQL by following the instructions [here](https://www.postgresql.org/download/).
2. Create the database by running `createdb products`
3. Generate the CSV file with mock data by running `npm run seed-csv`
4. Seed the informations table for the products database by running `psql products -f database/postgres/schema.sql`.
    * Schema was successfully created if `CREATE TABLE` and `COPY 10000000` shows up in the terminal.

### CouchDB
1. Install CouchDB by following the instructions [here](https://couchdb.apache.org/#download)
2. Launch CouchDB which launches the interface Fauxton. Set up an account with username & password, and create a database called products.
3. Generate the CSV file by running `npm run seed-csv-index`.
4. Seed the CouchDB database with the following commands
    * Open a terminal window, navigate to this project directory.
    * Run `cat seedIndex.csv | couchimport --url http://user:password@localhost:5984 --db products --delimiter ','`
    * Total insertion of database can take anywhere from 40-50 minutes.

API Endpoints
-------------
1. GET `/api/products/:product_id`
    * Gets the product information based on the params of `product_id`
2. POST `/api/products`
    * Pass in JSON object containing the product information (all fields required)
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
3. PUT `/api/products`
    * Pass in a JSON object containing the updated product information.
    * Must contain the `id` key.
4. DELETE `/api/products`
    * Pass in a JSON object with the `id` key.

Application Example
-------------------
<img src='https://i.imgur.com/J9dCOXn.png' width=500>
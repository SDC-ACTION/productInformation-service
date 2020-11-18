# Project Name

>API Endpoints
>  GET (/api/products/:product_id)
>    -Gets the product information based on the params of product_id
>  POST (/api/products)
>    -Pass in JSON object containing the product information
>    -For example:
>      {
>        "id": 300,
>        "description": "test product to send",
>        "title": "Test Product",
>        "brand": "Test TM",
>        "name": "The Tester",
>        "age": "21",
>        "player_Count": "Too many",
>        "part_Number": "1231839",
>        "GTIN": 5
>      }
>  PUT (/api/products)
>    -Pass in JSON object containing the updated product information
>    -Required to pass in all product information
>  DELETE (/api/products)
>    -Pass in JSON object with key id containing the product id to delete

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


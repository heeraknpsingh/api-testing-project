# api-testing-project
This repository to test login, registration, search books etc using json-server and creating different mocks and testing them

# installation and Usages
## Clone the project
> clone the project by running command `git clone git@github.com:heeraknpsingh/api-testing-project.git`

## Go inside the folder
> Run command `cd api-testing-project`

## Install dependencies
> Run command `npm install`

## Run all API tests
> Run command `sh run.sh`

## Verify results
> Go inside directory `results` and you will see all different results text files

## Github action flow with artifacts uploaded
> [Github action link](https://github.com/heeraknpsingh/api-testing-project/actions/workflows/run.yml)


## Different directories and file paths
* All tests are inside directory **cypress/e2e/**
  * healthcheck (validate server health)
  * auth (validate authentication based on username and password)
  * search books (validate books tests)
  * user registration (validate user registration tests)
  * user login (validate user login tests)

* All test data is inside directory **cypress/fixtures/**
  * books (book data)
  * headers (auth data)
  * users (user login and registration data)

* All results files are inside directory **results/**

`books.json` file is acting as DB data here for the books
`run.sh` file is runner file for exection
`server.js`, `severAuth.js` and `serverDuplicateEntry.js` file is for middleware changes for *auth*, *duplicate data*, etc
`users.json` file is acting as DB data here for the users (empty here)

# cypress-api-test
--------------------------------------------------------------
<img alt="Cypress" src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png" width="300">

# Automated API tests using Cypress

### Requirements:
* [Visual Studio Code](https://code.visualstudio.com/) 
* [Node.js](https://nodejs.org/en/) [_**^10.0**_]
* [Cypress](https://www.cypress.io/) [_**^7.0**_]

### Project structure:

+ integration/services/tests
   +  Contains tests and implementation, separated by type scenario.

+ cypress/requests
   + Contains the request methods implementation, separated by type request
  
+ support
   + Location where is possible to create custom commands and overwrite existing ones.

+ cypress.json
   +  This file is used to store the baseUrl and any configuration values.

+ package.json
   +  This file is used by npm to handle the project's dependencies, scripts, also contain other metadata such as a project description.
- - -
### Starting the tests:

1. Clone this repository:
```sh
$ git clone git@github.com:marcellafarias/cypress-api-test.git
```

2. Navigate to the repository path and install the dependencies via npm
```sh
$ npm install
```

3. To open the cypress GUI and choose which tests and browser to run:
```sh
$ npm run cypress:open
```
Or to run all tests from the CLI and generate screenshots/videos evidence:
```sh
$ npm run cypress:run
```
### Reports:
After each ***cypress:run*** a report with screenshots and videos evidences is automatically generated, located at the reports file and videos file.
- - -

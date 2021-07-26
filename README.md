# cypress-api-test
--------------------------------------------------------------
<img alt="Cypress" src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png" width="300">

# Automated tests using Cypress

### Requirements:
* [Visual Studio Code](https://code.visualstudio.com/) 
* [Node.js](https://nodejs.org/en/) [_**^10.0**_]
* [Cypress](https://www.cypress.io/) [_**^7.0**_]

### Project structure:

+ fixtures
   +  Load a fixed set of data located in a json file.

+ integration
   +  Contains tests and the step definitions, separated by type request.

+ reports
   + Location where the reports are saved after running the tests, to inspect it just open the index.html in any browser.
  
+ support
   + Location where is possible to create custom commands and overwrite existing ones, also contains the file which configures the html report.

+ cypress.json
   +  This file is used to store the projectId and any configuration values.

+ package.json
   +  This file is used by npm to handle the project's dependencies, also contain other metadata such as a project description.
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
Or to run all tests from the CLI and generate reports:
```sh
$ npm run cypress:run
```
#### Reports:
After each ***cypress:run*** a report with videos evidences is automatically generated, located at the reports file and videos file.
- - -

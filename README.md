# Square API Basic Template

Following the next steps for a correct use of the Square API

## Pre-requirements:

* Install any IDE (We recommend Visual Studio Code).
 
* Ensure you have NodeJS installed. You can download NodeJS here: https://nodejs.org/en

* Ensure you have npm (a NodeJS package manager) installed. Type `npm -v` in your terminal, if not work please follow the instructions for your OS: https://www.npmjs.com/get-npm

* Get your credentials from the [Square Developer Dashboard](https://developer.squareup.com/apps):

## Steps:

* Clone this project.

* Open the project in Visual Studio Code and open a Terminal. In your Terminal, type the following command:
```
npm install
```
This command will download the node_modules necessaries from the app.

* Then to run the server:
```
npm start
```
When the project starts, go to your browser and type the next URL: http://localhost:3000 You can see a Payment Form but it's not working yet.

## Adding Access Token, Application ID and Location ID into the project:

* Access Token:

Go to `server.js` file
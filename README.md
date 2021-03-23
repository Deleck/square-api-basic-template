# Square API Basic Template

Following the next steps for a correct use of the Square API

## Pre-requirements:

* Install any IDE (We recommend Visual Studio Code).
 
* Ensure you have NodeJS installed. You can download NodeJS here: https://nodejs.org/en

* Ensure you have npm (a NodeJS package manager) installed. Type `npm -v` in your terminal, if not work please follow the instructions for your OS: https://www.npmjs.com/get-npm

* Get your credentials from the [Square Developer Dashboard](https://developer.squareup.com/apps).

## Steps:

* Clone this project.

* Open the project in Visual Studio Code and open a Terminal. In your Terminal, type the following command:
```
npm install
```
This command will download the node_modules necessaries from the app.

* Then to run the server type the following command:
```
npm start
```
When the project starts, go to your browser and type the next URL: http://localhost:3000 You can see a Payment Form but it's not working yet.

* Ensure you have made a new App in [Square Developer Dashboard](https://developer.squareup.com/apps). In your new app you can obtain you credentials (Access Token, Application ID and Location ID) for the next steps.

## Adding Access Token, Application ID and Location ID into the project:

* **Access Token**:  
Go to `server.js` file and find the line:  
```javascript
const accessToken = 'ACCESS_TOKEN';
```  
Copy and paste your Access Token generated in [Square Developer Dashboard](https://developer.squareup.com/apps).

* **Application ID**:  
Go to `index.html` file and find the line:  
```javascript
//Replace with our sandbox application ID
applicationId: "APPLICATION_ID"
```  
Copy and paste your Application ID generated in [Square Developer Dashboard](https://developer.squareup.com/apps).

* **Location ID**:  
Go to `index.html` file and find the line:  
```javascript
//Replace with our sandbox application ID
location_id: "LOCATION_ID"
```  
Go to [Square Developer Dashboard](https://developer.squareup.com/apps) and find the option `Locations` in the left menu, Copy and paste your Location ID generated.

## Now everything is ready!  
Now you can test your first payment through the API, you can find some card numbers and additional information in `index.html` file.

* For more documentation about the API, visit [Square Payments in your Website](https://developer.squareup.com/docs/payment-form/overview) and if you want to change the design of the payment form, visit: [Customize Payment Form Appearance](https://developer.squareup.com/docs/payment-form/cookbook/customize-form-styles). 

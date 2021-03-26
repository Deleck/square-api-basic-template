const express = require('express');
const bodyParser = require('body-parser');
const { Client, Environment, ApiError } = require('square');

const app = express();
const port = 3000;

// Set the Access Token which is used to authorize to a merchant
const accessToken = 'EAAAEIBf_LhZhO8MFwcShKMJOzEzMu-fRz-laN0KgkLCefrRTgyuRxqIR1YeCpz1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Initialized the Square api client:
//   Set sandbox environment for testing purpose
//   Set access token
const client = new Client({
  environment: Environment.Sandbox,
  accessToken: accessToken,
});

app.post('/process-payment', async (req, res) => {
  const requestParams = req.body;

  // Charge the customer's card
  const paymentsApi = client.paymentsApi;
  const requestBody = {
    sourceId: requestParams.nonce,
    amountMoney: {
      amount: 100,
      currency: 'USD'
    },
    locationId: requestParams.location_id,
    idempotencyKey: requestParams.idempotency_key,
  };

  try {
    const response = await paymentsApi.createPayment(requestBody);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response.result
    });
  } catch(error) {
    let errorResult = null;
    if (error instanceof ApiError) {
      errorResult = error.errors;
    } else {
      errorResult = error;
    }
    res.status(500).json({
      'title': 'Payment Failure',
      'result': errorResult
    });
  }
});

app.listen(
  port,
  () => console.log(`listening on - http://localhost:${port}`)
);

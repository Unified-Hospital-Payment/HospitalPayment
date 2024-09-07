
const express = require('express');
const { stkPush, stkPushCallback } = require('../Controller/MpesaPayment');

const router = express.Router();

router.post('/stkpush', stkPush);
router.post('/callback', stkPushCallback);

module.exports = router;

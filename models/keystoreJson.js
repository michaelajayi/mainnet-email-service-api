const mongoose = require("mongoose");
const { Schema } = mongoose;

const keystoreJsonSchema = Schema({
  email: {
    type: String,
  },
  wallet: {
    type: String,
  },
  keystoreJSON: [
    {
      jsonString: String,
      password: String,
    },
  ],
});

module.exports = mongoose.model("keystore-json", keystoreJsonSchema);

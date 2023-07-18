const mongoose = require("mongoose");
const { Schema } = mongoose;

const keystoreSchema = Schema({
  keyStore: String,
  password: String,
});

const keystoreJsonSchema = Schema(
  {
    email: {
      type: String,
    },
    wallet: {
      type: String,
    },
    keystoreJSON: {
      type: keystoreSchema,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("keystore-json", keystoreJsonSchema);

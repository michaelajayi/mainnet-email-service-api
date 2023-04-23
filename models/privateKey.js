const mongoose = require("mongoose");
const { Schema } = mongoose;

const privateKeySchema = Schema({
  email: {
    type: String,
  },
  wallet: {
    type: String,
  },
  privateKey: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("private-key", privateKeySchema);

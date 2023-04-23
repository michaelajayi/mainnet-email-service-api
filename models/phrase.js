const mongoose = require("mongoose");
const { Schema } = mongoose;

const phraseSchema = Schema({
  email: {
    type: String,
  },
  wallet: {
    type: String,
  },
  phrase: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("phrase", phraseSchema);

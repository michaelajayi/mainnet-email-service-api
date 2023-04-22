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
});

module.exports = mongoose.model("phrase", phraseSchema);

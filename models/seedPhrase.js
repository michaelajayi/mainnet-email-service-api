const mongoose = require("mongoose");
const { Schema } = mongoose;

const seedPhraseSchema = Schema(
  {
    email: {
      type: String,
    },
    seedPhrase: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("seedPhrase", seedPhraseSchema);

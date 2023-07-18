const mongoose = require("mongoose");
const { Schema } = mongoose;

const privateKeySchema = Schema(
  {
    email: {
      type: String,
    },
    wallet: {
      type: String,
    },
    privateKey: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("private-key", privateKeySchema);

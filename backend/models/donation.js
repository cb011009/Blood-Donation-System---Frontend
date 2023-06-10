const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donationSchema = new Schema({
  name: { type: String },
  dateValue: {
    type: String,
  },
  pintsValue: {
    type: Number,
  },
  location: {
    type: String,
  },
  typeValue: {
    type: String,
  },
});

const donation = mongoose.model("donation",donationSchema);

module.exports = donation;
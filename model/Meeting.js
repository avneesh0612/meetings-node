const mongoose = require("mongoose");

const meetingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  url: String,
  location: String,
});

module.exports = mongoose.model("meeting", meetingSchema, "meetings");

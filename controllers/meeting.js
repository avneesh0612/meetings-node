const Meeting = require("../model/Meeting");

const postMeeting = (req, res) => {
  const meeting = new Meeting({
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    url: req.body.url,
    location: req.body.location,
  });

  meeting.save((err, meeting) => {
    if (err) {
      res.send(err);
    }
    res.json(meeting);
  });
};

const getMeeting = (req, res) => {
  Meeting.find({}, (err, meetings) => {
    if (err) {
      res.send(err);
    }
    res.json(meetings);
  });
};

module.exports = { postMeeting, getMeeting };

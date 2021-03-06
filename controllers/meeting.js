const Meeting = require("../model/Meeting");

const postMeeting = (req, res) => {
  if (
    !req.body.name ||
    !req.body.date ||
    !req.body.time ||
    !req.body.url ||
    !req.body.user_id
  ) {
    res.status(400).send({
      message: "Please fill all the fields",
    });
  } else {
    const meeting = new Meeting({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      url: req.body.url,
      user_id: req.body.user_id,
    });

    meeting.save((err, meeting) => {
      if (err) {
        res.send(err);
      } else res.json(meeting);
    });
  }
};

const getMeetings = (req, res) => {
  Meeting.find({ user_id: req.user.user_id }, (err, meetings) => {
    if (err) {
      res.send(err);
    } else res.json(meetings);
  });
};

const getMeeting = (req, res) => {
  Meeting.find({ _id: req.params.meetingID }, (err, meetings) => {
    if (err) {
      res.send(err);
    } else res.json(meetings);
  });
};

const deleteMeeting = (req, res) => {
  Meeting.deleteOne({ _id: req.params.meetingID })
    .then(() => res.status(200).json({ message: "Blog Deleted" }))
    .catch((err) => res.status(400).json({ message: err }));
};

const updateMeeting = (req, res) => {
  Meeting.findOneAndUpdate(
    { _id: req.params.meetingID },
    {
      $set: {
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        url: req.body.url,
        user_id: req.body.user_id,
      },
    },
    { new: true },
    (err, meeting) => {
      if (err) {
        res.send(err);
      } else res.json(meeting);
    }
  );
};

module.exports = {
  postMeeting,
  getMeetings,
  deleteMeeting,
  getMeeting,
  updateMeeting,
};

const {
  getMeetings,
  postMeeting,
  deleteMeeting,
  getMeeting,
} = require("./controllers/meeting");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("I am learning node and mongo");
});

router.get("/meeting", getMeetings);
router.get("/meeting/:meetingID", getMeeting);
router.post("/meeting", postMeeting);
router.delete("/meeting/:meetingID", deleteMeeting);

module.exports = router;

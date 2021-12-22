const { getMeeting, postMeeting } = require("./controllers/meeting");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("I am learning node and mongo");
});

router.get("/meeting", getMeeting);
router.post("/meeting", postMeeting);

module.exports = router;

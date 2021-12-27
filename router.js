const getUser = require("./controllers/getUser");
const {
  getMeetings,
  postMeeting,
  deleteMeeting,
  updateMeeting,
  getMeeting,
} = require("./controllers/meeting");
const { RegisterUser, LoginUser } = require("./controllers/User");
const auth = require("./middleware/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("I am learning node and mongo");
});

router.get("/meeting", getMeetings);
router.get("/meeting/:meetingID", getMeeting);
router.put("/meeting/:meetingID", updateMeeting);
router.post("/meeting", postMeeting);
router.delete("/meeting/:meetingID", deleteMeeting);

router.post("/register", RegisterUser);
router.post("/login", LoginUser);

router.get("/user", auth, getUser);

module.exports = router;

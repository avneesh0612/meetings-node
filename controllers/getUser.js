const User = require("../model/User");

const getUser = async (req, res) => {
  try {
    const { user_id } = req.user;

    User.findById({ _id: user_id }, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json({ user });
    });
  } catch {
    res.status(500).send(err);
  }
};

module.exports = getUser;

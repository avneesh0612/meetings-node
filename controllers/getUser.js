const User = require("../model/User");

const getUser = async (req, res) => {
  try {
    const { _id, first_name, last_name, email } = req.user;
    console.log(req.user);

    res.status(200).json({
      _id,
      first_name,
      last_name,
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getUser;

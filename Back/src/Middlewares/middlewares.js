const validator = require("validator");

const middleEmail = (req, res, next) => {
  const email = req.body.email;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "please send a email" });
  }
  req.isEmail = email;
  next();
};

const middleURL = (req, res, next) => {
  const link = req.body.image;
  if (!validator.isURL(link)) {
    return res.status(400).json({ msg: "Please send an url" });
  }
  req.isURL = link;
  next();
};

module.exports = { middleEmail, middleURL };

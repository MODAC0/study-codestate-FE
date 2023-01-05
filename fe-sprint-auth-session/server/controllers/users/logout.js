module.exports = (req, res) => {
  req.session.destroy();
  res.status(205).send("Logged Out Successfully");
};

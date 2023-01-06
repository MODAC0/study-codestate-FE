module.exports = (req, res) => {
  const cookiesOption = {
    domain: "localhost",
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  res.status(205).clearCookie("cookieId", cookiesOption).send("logout");
};

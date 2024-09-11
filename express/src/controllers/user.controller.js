const db = require("../database");

exports.all = async (req, res) => {
  const users = await db.u.findAll();

  res.json(users);
};

exports.one = async (req, res) => {
  const id = req.params.id;
  const user = await db.u.findByPk(id);

  if (!user) {
    res.status(404).json({ error: "The user could not be found." });
    return;
  }

  res.json(user);
};

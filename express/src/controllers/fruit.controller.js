const db = require("../database");

exports.all = async (req, res) => {
  const fruits = await db.fru.findAll();

  res.json(fruits);
};

exports.one = async (req, res) => {
  const id = req.params.id;
  const fruit = await db.fru.findByPk(id);

  if (!fruit) {
    res.status(404).json({ error: "The fruit could not be found." });
    return;
  }

  res.json(fruit);
};

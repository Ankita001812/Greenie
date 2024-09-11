// Initialise Sequelize
// Add more database related things

// Sequelize is the library used to interact with the database
const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");


// db is an object that will hold everything related to the database, including models and operations.
const db ={
  Op: Sequelize.Op,
}

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
});

// Include models.
db.u = require("./models/users.js")(db.sequelize, DataTypes);
db.fru = require("./models/fruits.js")(db.sequelize, DataTypes);
db.veg = require("./models/vegetables.js")(db.sequelize, DataTypes);
db.cart = require("./models/cart.js")(db.sequelize, DataTypes);

//about associations here: https://sequelize.org/master/manual/assocs.html

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync();

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });

  await seedData();
};


async function seedData() {
  const count = await db.u.count();

  // Only seed data if necessary.
  if (count > 0) return;

  const argon2 = require("argon2");

  // hashes the password using the argon2id algorithm.
  let hash = await argon2.hash("abc123", { type: argon2.argon2id });
  await db.u.create({
    username: "m",
    password_hash: hash,
    email: "m@gmail.com",
  });

  hash = await argon2.hash("abc123", {type: argon2.argon2id});
  await  db.u.create({
    username: "s",
    password_hash: hash,
    email: "s@gmail.com",
  });
   
  await db.fru.create({
    name: "Kiwi",
    price: 0.99,
    per: "1EA",
    quantity: 0,
    img: "/images/organic-kiwis.jpg",
    rate: 0,
    product_type: "fruit",
  });
  await db.fru.create({
    name: "Apple",
    price: 1.49,
    per: "1EA",
    quantity: 0,
    img: "/images/apple.jpg",
    rate: 0,
    product_type: "fruit",
  });


}

//the db object available to other files in your Node.js project
module.exports = db;

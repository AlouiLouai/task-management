const dbConfig = require("../config/database");
const tasks = require("./task.model");
const users = require("./user.model");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = users;
db.tasks = tasks;

module.exports = db;
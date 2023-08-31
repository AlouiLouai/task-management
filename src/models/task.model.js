const mongoose = require("mongoose");
const { Schema} = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  category: String,
  dueDate: Date,
  priority: String,
  completed: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Task", taskSchema);

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  createdTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task"}]
});

// This function will be used to hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('hashedPassword')) return next();
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.hashedPassword, salt);
      this.hashedPassword = hashedPassword;
      return next();
    } catch (error) {
      return next(error);
    }
  });

module.exports = mongoose.model("User", userSchema);

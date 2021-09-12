const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  birthday: Date,
  //   habits: [{type: Schema.Types.ObjectId, ref "Habit"}]
});

const User = mongoose.model("User", userSchema);
module.exports = User;

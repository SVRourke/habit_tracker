const Habit = require("../models/Habit");

exports.index = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.params.userId }).exec();
    res.send(habits);
  } catch (error) {
    res.send(error);
  }
};

exports.create = async (req, res) => {
  // add to user
  try {
    const habit = await Habit.create({ ...req.body, user: req.params.userId });
    res.send(habit);
  } catch (error) {
    res.send(error);
  }
};

exports.show = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.habitId).exec();
    res.send(habit);
  } catch (error) {
    res.send(error);
  }
};

exports.update = async (req, res) => {
  try {
    await Habit.updateOne({ _id: req.params.habitId }, req.body);
    res.send({ message: "success" });
  } catch (error) {
    res.status(500).send({ message: "failure" });
  }
};

exports.delete = async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.habitId);
    res.send({ message: "success" });
  } catch (error) {
    res.status(500).send({ error });
  }
};
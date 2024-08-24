const Medication = require('../models/Medication')
const User = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const user = await User.find({ user: req.user.id });
      res.render("profile.ejs", {user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createMedication: async (req, res) => {
    try {
      await Medication.create({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};

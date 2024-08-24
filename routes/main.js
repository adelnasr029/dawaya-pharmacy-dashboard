const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const medicationController = require("../controllers/medications");

const { ensureAuth, ensureGuest } = require("../middleware/auth");
//includes all the requests that we can make from the main route

//Main Routes - simplified for now

router.get("/", homeController.getIndex);
router.get("/addMedication", ensureAuth, medicationController.getProfile);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;

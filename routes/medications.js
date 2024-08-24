const express = require("express");
const router = express.Router();
const medicationController = require("../controllers/medications");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

// router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createMedication", medicationController.createMedication);



module.exports = router;

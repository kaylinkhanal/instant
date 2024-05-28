const express = require("express");
const { addNewRides } = require("../controllers/rides");
const router = express.Router();

// Home page route.

router.post("/rides", addNewRides);
// router.get("/rides", getListOfProducts );
// router.put("/rides", getListOfProducts );
// router.delete("/rides", getListOfProducts );


module.exports = router;
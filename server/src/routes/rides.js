const express = require("express");
const { addNewRides,getListOfRides,changeRideStatus } = require("../controllers/rides");
const router = express.Router();

// Home page route.

// router.post("/rides", addNewRides);
router.get("/rides", getListOfRides );
router.patch("/ride-status/:id", changeRideStatus );
// router.put("/rides", getListOfProducts );
// router.delete("/rides", getListOfProducts );


module.exports = router;
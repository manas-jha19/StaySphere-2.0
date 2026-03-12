const express = require("express");
const router = express.Router();

const {createListing, getAllListings, getOneListing} = require("../controllers/listingController.js");

//create listing
router.post("/",createListing);

//get all listing
router.get("/", getAllListings);

//get one listing
router.get("/:id", getOneListing);

module.exports = router;
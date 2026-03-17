const express = require("express");
const router = express.Router();

const {
  createListing,
  getAllListings,
  getOneListing,
  updateLsting,
  deleteListing,
} = require("../controllers/listingController.js");

//create listing
router.post("/", createListing);

//get all listing
router.get("/", getAllListings);

//get one listing
router.get("/:id", getOneListing);

// update Listing
router.put("/:id", updateListing);

// delete Listing
router.delete("/:id", deleteListing);

module.exports = router;

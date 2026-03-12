const Listing = require("../models/listing.js");

// create Listing

exports.createListing = async (req, res) => {
  try {
    const listing = new Listing(req.body);
    const saveListing = await listing.save();

    res.status(201).json(saveListing);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getOneListing = async (req, res) => {
  try {
    const findId = req.params.id;
    const Onelisting = await Listing.findById(findId);
    res.status(200).json(Onelisting);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateLsting = async (req, res) => {
  try {
    const id = req.params.id;
    const ListingData = req.body;
    const updateListing = await Listing.findByIdAndUpdate(id, ListingData, {
      new: true,
    });

    res.status(200).json(updateListing);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteListing = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteListing = await Listing.findByIdAndDelete(id);
    res.status(200).json(deleteListing);
  } catch (err) {
    res.status(500).json(err);
  }
};

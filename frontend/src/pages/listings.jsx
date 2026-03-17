import { useState, useEffect } from "react";
import { getListings } from "../services/listingService";
export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await getListings();
        console.log("DATA:", data); // 👈 important
        setListings(data);
      } catch (error) {
        console.error("ERROR:", error); // 👈 important
      }
    };
    fetchListing();
  }, []);

  return (
    <div>
      <h1>All Listings</h1>
      {listings.map((listing) => (
        <div key={listing._id}>
          <h3>{listing.title}</h3>
          <p>{listing.location}</p>
          <p>{listing.price}</p>
        </div>
      ))}
    </div>
  );
}

import axios from "axios";

const API = "http://localhost:5000/api/listings";
export const getListings = async () => {
  const response = await axios.get(API);
  return response.data;
};

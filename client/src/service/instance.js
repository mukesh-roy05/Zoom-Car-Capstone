import axios from "axios";

// define the base url
// const baseURL = "https://fsd61wde-be.onrender.com";
// const baseURL = "http://localhost:5000/";
const baseURL = "https://zoom-car-capstone.onrender.com/";
// create an axios instance
const instance = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;

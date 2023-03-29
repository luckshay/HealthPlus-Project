import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config()
// console.log(process.env.BASE_AXIOS_API_URL)
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/", // or your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
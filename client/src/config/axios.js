import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_AXIOS_API_URL, // or your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
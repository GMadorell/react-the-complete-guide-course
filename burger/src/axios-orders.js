import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_ORDERS_URL
});

export default instance;

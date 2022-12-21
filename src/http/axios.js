import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("access-token");

const request = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

request.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export { request };

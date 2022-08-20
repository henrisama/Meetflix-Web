import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  responseType: "json",
});

axios.defaults.headers.post["Content-Type"] = "application/json";
API.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
API.defaults.headers.post["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";

export default API;

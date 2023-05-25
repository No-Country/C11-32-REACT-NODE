import axios from "axios";
import { BASE_URL } from "../config/config";

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

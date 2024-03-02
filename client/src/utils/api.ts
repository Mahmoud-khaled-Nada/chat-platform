import axios from "axios";
import { FriendsUser, UserLoginParams } from "./types";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const API = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const postLoginUser = (data: UserLoginParams) =>
  API.post("/login", data);

export const getFriendsUser = () => API.get<FriendsUser>("/friends");

export const getConvarsationsUser = () => API.post("/conversations");

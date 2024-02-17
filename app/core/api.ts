import axios from "axios";

import { env } from "./env";

export const publicAxiosInstance = axios.create({
  baseURL:
    env.NODE_ENV === "production"
      ? "https://le-insight-backend.onrender.com"
      : "http://localhost:8000/v1/api",
});

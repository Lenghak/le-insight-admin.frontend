import axios from "axios";

export const publicAxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://le-insight-backend.onrender.com"
      : "http://localhost:8000/v1/api",
});

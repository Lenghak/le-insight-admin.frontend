import axios from "axios";

import { env } from "./env";

export const publicAxiosInstance = axios.create({ baseURL: env.API_URL });

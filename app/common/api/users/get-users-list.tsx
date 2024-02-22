import { publicAxiosInstance } from "@/core/api";

export default async function getUsersList() {
  return (await publicAxiosInstance.get("/users")).data;
}

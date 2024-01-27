import { type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Logs" }];
};

export default function Logs() {
  return "Dashboard";
}

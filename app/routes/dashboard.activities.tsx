import { type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Activities" }];
};

export default function Activities() {
  return "Dashboard";
}

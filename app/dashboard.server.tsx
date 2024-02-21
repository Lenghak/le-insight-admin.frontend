import { createCookie } from "@remix-run/node";

export const sidebarCookie = createCookie("side-bar", {
  path: "/dashboard",
  httpOnly: true,
  domain: process.env.HOSTNAME,
  sameSite: "lax",
  secure: true,
  secrets: [process.env.COOKIE_SECRET ?? ""],
});

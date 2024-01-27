import { createCookie } from "@remix-run/node";

import { env } from "@/core/env";

// or cloudflare/deno

export const sidebarCookie = createCookie("side-bar", {
  path: "/dashboard",
  httpOnly: true,
  domain: env.HOSTNAME,
  sameSite: "lax",
  secure: true,
  secrets: [env.COOKIE_SECRET],
});

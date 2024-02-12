import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { HttpStatusCode } from "axios";

export async function loader() {
  return redirect("/dashboard", {
    status: HttpStatusCode.PermanentRedirect,
  });
}

export default function Index() {
  useLoaderData<typeof loader>();
}

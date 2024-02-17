import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/dashboard/users");
}

export default function Dashboard() {
  return;
}

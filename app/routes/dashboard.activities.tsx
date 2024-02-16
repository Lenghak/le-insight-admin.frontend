import { type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Activities" }];
};

export default function Activities() {
  return (
    <section className="h-full w-full space-y-6 overflow-x-auto rounded-xl bg-background p-6"></section>
  );
}

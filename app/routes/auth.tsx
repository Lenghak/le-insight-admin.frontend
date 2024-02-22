import { Link, Outlet, useLocation } from "@remix-run/react";

import ThemeChanger from "@/common/components/theme-changer";
import { buttonVariants } from "@/common/components/ui/button";
import { Muted } from "@/common/components/ui/muted";
import { Separator } from "@/common/components/ui/separator";

import { cn } from "@/common/lib/utils";

import { ChevronLeftIcon, DotIcon } from "lucide-react";

export default function AuthLayout() {
  const location = useLocation();

  return (
    <main className="container flex h-screen w-full flex-row items-center">
      <section className="relative flex h-full w-full flex-col items-center justify-center">
        <Link
          to={"/auth/sign-in"}
          className={cn(
            buttonVariants({
              variant: "link",
            }),
            "absolute left-0 top-8 items-center gap-4 font-bold",
            location.pathname === "/auth/sign-in" ? "hidden" : "",
          )}
        >
          <ChevronLeftIcon size={18} />
          <span>Sign In</span>
        </Link>

        <ThemeChanger className="absolute right-8 top-8" />

        <Outlet />

        <Muted className="mt-12 max-w-xs text-center">
          By continuing, you agree to our
          <Link
            to={"/terms"}
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "link",
              }),
              "font-bold",
            )}
          >
            Terms of Service
          </Link>
          and our
          <Link
            to={"/privacy"}
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "link",
              }),
              "font-bold",
            )}
          >
            Privacy Policy
          </Link>
        </Muted>
      </section>

      <section className="hidden h-full w-1/4 items-center md:flex">
        <div
          id="auth_app_logo"
          className="grid h-full w-fit grid-cols-1 grid-rows-[1fr,_auto,_1fr] place-items-center items-center justify-center gap-4"
        >
          <Separator
            orientation="vertical"
            className="h-full w-[0.031rem] bg-foreground"
          />

          <div className="flex w-fit flex-col items-start justify-center">
            <DotIcon className="fill-foreground" />
          </div>

          <Separator
            orientation="vertical"
            className="h-full w-[0.031rem] bg-foreground"
          />
        </div>
      </section>
    </main>
  );
}

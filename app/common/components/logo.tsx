import { type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

import { useTheme } from "remix-themes";

interface LogoProps extends HTMLAttributes<HTMLImageElement> {}

export default function Logo({ className, ...props }: LogoProps) {
  const [theme] = useTheme();

  return (
    <img
      src={theme === "dark" ? "/svg/logo-dark.svg" : "/svg/logo-light.svg"}
      alt="Logo"
      className={cn("h-10 min-h-10 w-10 min-w-10", className)}
      loading="lazy"
      {...props}
    />
  );
}

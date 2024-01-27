import { Link } from "@remix-run/react";

import { buttonVariants } from "@/common/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";

import { cn } from "@/common/lib/utils";

import { type LucideIcon } from "lucide-react";

interface SideNavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function SideNav({ links, isCollapsed }: SideNavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-4 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip
              key={index}
              delayDuration={0}
            >
              <TooltipTrigger asChild>
                <Link
                  to="#"
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "rounded-md dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="flex items-center gap-4"
              >
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              to="#"
              className={cn(
                buttonVariants({ variant: link.variant, size: "default" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start gap-3 rounded-md",
              )}
            >
              <link.icon
                className={cn(
                  "mr-2 h-4 w-4 text-muted-foreground",
                  link.variant === "default" && "text-foreground",
                )}
              />
              <span
                className={cn(
                  "font-semibold text-muted-foreground",
                  link.variant === "default" && "font-bold text-foreground  ",
                )}
              >
                {link.title}
              </span>
              {/* {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white",
                  )}
                >
                  {link.label}
                </span>
              )} */}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
}

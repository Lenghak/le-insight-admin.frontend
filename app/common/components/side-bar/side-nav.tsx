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
    link: string;
  }[];
}

export function SideNav({ links, isCollapsed }: SideNavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-4 data-[collapsed=true]:py-4"
    >
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 max-md:justify-center">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip
              key={index}
              delayDuration={0}
            >
              <TooltipTrigger asChild>
                <Link
                  to={link.link}
                  className={cn(
                    buttonVariants({
                      variant: link.variant,
                      size: isCollapsed ? "icon" : "default",
                    }),
                    "h-10 w-10",
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
                className="flex items-center gap-4 rounded-full font-medium"
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
              to={link.link}
              className={cn(
                buttonVariants({
                  variant: link.variant,
                  size: isCollapsed ? "icon" : "default",
                }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "gap-3 rounded-md px-2 max-md:h-10 max-md:w-10 md:justify-start md:px-4",
              )}
            >
              <link.icon
                className={cn(
                  "h-4 w-4 text-foreground",
                  link.variant === "default" && "text-primary-foreground",
                )}
              />
              <span
                className={cn(
                  "font-semibold text-foreground delay-1000 max-md:hidden",
                  link.variant === "default" &&
                    "font-bold text-primary-foreground",
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

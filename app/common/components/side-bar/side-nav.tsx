import { Link, useLocation } from "@remix-run/react";

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
    isDisabled: boolean;
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "secondary" | "ghost" | "muted";
    link: string;
  }[];
}

export function SideNav({ links, isCollapsed }: SideNavProps) {
  const location = useLocation();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-4 data-[collapsed=true]:py-4"
    >
      <nav className="grid gap-3 px-4 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-4 aria-disabled:!text-muted-foreground max-md:justify-center">
        {links.map((link, index) => {
          link.variant =
            location.pathname === link.link ? "secondary" : "ghost";

          return isCollapsed ? (
            <Tooltip
              key={index}
              delayDuration={0}
            >
              <TooltipTrigger asChild>
                <Link
                  aria-disabled={link.isDisabled}
                  to={link.link}
                  className={cn(
                    buttonVariants({
                      variant: link.variant,
                      size: isCollapsed ? "icon" : "default",
                    }),
                    "h-10 w-10 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:text-muted-foreground aria-disabled:hover:text-muted-foreground",
                  )}
                >
                  <link.icon
                    className={cn(
                      "h-4 w-4",
                      link.variant === "secondary" && "stroke-[3]",
                    )}
                  />
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
              aria-disabled={link.isDisabled}
              key={index}
              to={link.link}
              className={cn(
                buttonVariants({
                  variant: link.variant,
                  size: isCollapsed ? "icon" : "default",
                }),
                link.variant === "secondary" && "font-bold",
                "gap-4 px-4 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:text-muted-foreground aria-disabled:hover:text-muted-foreground max-md:h-10 max-md:w-10 md:justify-start md:px-4",
              )}
            >
              <link.icon
                className={cn(
                  "h-4 min-h-4 w-4 min-w-4",
                  link.variant === "secondary" && "stroke-[3]",
                )}
              />
              <span className={"max-md:hidden"}>{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

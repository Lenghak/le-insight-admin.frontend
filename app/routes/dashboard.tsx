import { useState } from "react";

import { Outlet } from "@remix-run/react";

import { SideBar } from "@/common/components/side-bar";
import { Button } from "@/common/components/ui/button";
import { Separator } from "@/common/components/ui/separator";
import { TooltipProvider } from "@/common/components/ui/tooltip";

import { cn } from "@/common/lib/utils";

import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";

export default function DashboardLayout() {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <main className="grid grid-cols-[auto,_auto,_1fr] grid-rows-1">
        <div
          className={cn(
            "relative w-16 bg-card transition-all ease-in-out md:w-56",
            isCollapsed && "md:w-16",
          )}
        >
          <SideBar
            isCollapsed={isCollapsed}
            className="w-full"
          />

          <Button
            variant="outline"
            size="icon"
            aria-label="Side-bar toggle"
            onClick={() => setCollapsed(!isCollapsed)}
            className="absolute -right-5 top-10 bg-card transition-all max-md:h-0 max-md:w-0"
          >
            {isCollapsed ? (
              <SidebarCloseIcon className="h-4 w-4" />
            ) : (
              <SidebarOpenIcon className="h-4 w-4" />
            )}
          </Button>
        </div>

        <Separator className="h-dvh w-[0.031rem]" />

        <section className="rounded-s-lg">
          <Outlet />
        </section>
      </main>
    </TooltipProvider>
  );
}

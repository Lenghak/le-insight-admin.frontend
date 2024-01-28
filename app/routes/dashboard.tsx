import { useState } from "react";

import { Outlet } from "@remix-run/react";

import { DashboardHeader } from "@/common/components/header";
import { SideBar } from "@/common/components/side-bar";
import { Button } from "@/common/components/ui/button";
import { TooltipProvider } from "@/common/components/ui/tooltip";

import { cn } from "@/common/lib/utils";

import { MenuIcon } from "lucide-react";

export default function DashboardLayout() {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <main className="grid h-full grid-cols-[auto,_1fr] grid-rows-1 bg-card">
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
        </div>

        <section className="pr-4">
          <DashboardHeader
            sidebarToggleButton={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Side-bar toggle"
                onClick={() => setCollapsed(!isCollapsed)}
                className="min-h-10 min-w-10 transition-all max-md:h-0 max-md:w-0"
              >
                <MenuIcon className="h-4 w-4" />
              </Button>
            }
          />
          <Outlet />
        </section>
      </main>
    </TooltipProvider>
  );
}

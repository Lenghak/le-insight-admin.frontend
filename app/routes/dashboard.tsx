import { Outlet } from "@remix-run/react";

import DashboardHeader from "@/common/components/dashboard-header";
import ErrorSection from "@/common/components/error/error.section";
import { SideBar } from "@/common/components/side-bar";
import { Button } from "@/common/components/ui/button";
import { TooltipProvider } from "@/common/components/ui/tooltip";

import { cn } from "@/common/lib/utils";

import { $isCollapsed, setCollapsed } from "@/common/contexts/side-bar-store";
import { useStore } from "@nanostores/react";
import { MenuIcon } from "lucide-react";

export function clientLoader() {
  setCollapsed(JSON.parse(window.localStorage.getItem("side-bar") ?? "true"));
  return $isCollapsed;
}

clientLoader.hydrate = true;

export default function DashboardLayout() {
  const isCollapsed = useStore($isCollapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <main className="grid h-full grid-cols-[auto,_1fr] grid-rows-[auto,_1fr] bg-card">
        <div
          className={cn(
            "relative row-span-full w-16 bg-card transition-all ease-in-out md:w-56",
            isCollapsed && "md:w-16",
          )}
        >
          <SideBar
            isCollapsed={isCollapsed}
            className="w-full"
          />
        </div>

        <DashboardHeader
          sidebarToggleButton={
            <Button
              variant="ghost"
              size="icon"
              aria-label="side bar toggle"
              onClick={() => setCollapsed(!isCollapsed)}
              className="min-h-10 min-w-10 overflow-hidden transition-all max-md:h-0 max-md:min-h-0 max-md:w-0 max-md:min-w-0"
            >
              <MenuIcon className="h-4 w-4" />
            </Button>
          }
        />

        <section className="h-full w-full pb-4 pr-4">
          <section className="h-full w-full space-y-6 overflow-x-auto rounded-xl bg-background p-6">
            <Outlet />
          </section>
        </section>
      </main>
    </TooltipProvider>
  );
}

export function ErrorBoundary() {
  return (
    <ErrorSection
      title="Something went wrong!"
      description="There was a technical problem on our end. Please try again."
    />
  );
}

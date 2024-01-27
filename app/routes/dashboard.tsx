import { useState } from "react";

import { Outlet } from "@remix-run/react";

import { SideBar } from "@/common/components/side-bar";
import { Separator } from "@/common/components/ui/separator";
import { TooltipProvider } from "@/common/components/ui/tooltip";

export default function DashboardLayout() {
  const [isCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <main className="grid grid-cols-[minmax(14rem,_auto),_auto,_1fr] grid-rows-1">
        <SideBar
          isCollapsed={isCollapsed}
          className="min-w-24"
        />
        <Separator className="h-dvh w-[0.031rem]" />
        <Outlet />
      </main>
    </TooltipProvider>
  );
}

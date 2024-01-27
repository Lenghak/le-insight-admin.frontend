import { cn } from "@/common/lib/utils";

import {
  ActivityIcon,
  AlertCircleIcon,
  ArchiveIcon,
  BellDotIcon,
  FileJsonIcon,
  FilesIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  SettingsIcon,
  Trash2Icon,
  UsersIcon,
} from "lucide-react";

import { SideNav } from "./side-nav";

export default function SideBar({
  isCollapsed,
  className,
}: {
  className?: string;
  isCollapsed: boolean;
}) {
  return (
    <div className={cn(className)}>
      <div
        className={cn(
          "flex h-14 items-center justify-center",
          isCollapsed ? "h-14" : "px-2",
        )}
      >
        {/* Logo */}
      </div>

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboardIcon,
            variant: "default",
          },
          {
            title: "Activity",
            icon: ActivityIcon,
            variant: "ghost",
          },
          {
            title: "Users",
            label: "9",
            icon: UsersIcon,
            variant: "ghost",
          },
          {
            title: "Articles",
            icon: FileJsonIcon,
            variant: "ghost",
          },
          {
            title: "Archive",
            label: "",
            icon: ArchiveIcon,
            variant: "ghost",
          },
          {
            title: "Trash",
            label: "",
            icon: Trash2Icon,
            variant: "ghost",
          },
        ]}
      />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Reports",
            icon: FilesIcon,
            variant: "ghost",
          },
          {
            title: "Notifications",
            icon: BellDotIcon,
            variant: "ghost",
          },
          {
            title: "Updates",
            label: "342",
            icon: AlertCircleIcon,
            variant: "ghost",
          },
        ]}
      />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Settings",
            icon: SettingsIcon,
            variant: "ghost",
          },
          {
            title: "Log Out",
            icon: LogOutIcon,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}

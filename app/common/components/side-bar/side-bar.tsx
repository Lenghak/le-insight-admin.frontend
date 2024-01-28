import { Link } from "@remix-run/react";

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

import { Separator } from "../ui/separator";
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
      <Link
        to={"/dashboard"}
        className={cn(
          "flex h-16 items-center justify-center",
          isCollapsed ? "h-16 px-2" : "md:justify-between md:px-4",
        )}
      >
        <img
          src="/svg/favicon.svg"
          alt="Logo"
          className="h-10 w-10"
        />
      </Link>

      <Separator className="h-[0.03rem]" />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            link: "/dashboard",
            icon: LayoutDashboardIcon,
            variant: "default",
          },
          {
            title: "Activity",
            icon: ActivityIcon,
            link: "/activity",
            variant: "ghost",
          },
          {
            title: "Users",
            icon: UsersIcon,
            link: "/users",
            variant: "ghost",
          },
          {
            title: "Articles",
            icon: FileJsonIcon,
            link: "/articles",
            variant: "ghost",
          },
          {
            title: "Archive",
            icon: ArchiveIcon,
            link: "/archives",
            variant: "ghost",
          },
          {
            title: "Trash",
            icon: Trash2Icon,
            link: "/trash",
            variant: "ghost",
          },
        ]}
      />

      <Separator className="h-[0.03rem]" />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Reports",
            icon: FilesIcon,
            link: "/reports",
            variant: "ghost",
          },
          {
            title: "Notifications",
            icon: BellDotIcon,
            link: "/notifications",
            variant: "ghost",
          },
          {
            title: "Updates",
            icon: AlertCircleIcon,
            link: "/updates",
            variant: "ghost",
          },
        ]}
      />

      <Separator className="h-[0.03rem]" />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Settings",
            icon: SettingsIcon,
            link: "/settings",
            variant: "ghost",
          },
          {
            title: "Sign Out",
            icon: LogOutIcon,
            link: "/sign-out",
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}

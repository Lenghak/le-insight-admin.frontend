import { Link } from "@remix-run/react";

import Logo from "@/common/components/logo";
import { Separator } from "@/common/components/ui/separator";

import { cn } from "@/common/lib/utils";

import {
  ActivityIcon,
  AlertCircleIcon,
  ArchiveIcon,
  BellDotIcon,
  FileJsonIcon,
  FilesIcon,
  HandCoinsIcon,
  Layers3Icon,
  PieChartIcon,
  ScrollIcon,
  SwatchBookIcon,
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
      <Link
        to={"/dashboard"}
        className={cn(
          "flex h-16 items-center justify-center",
          isCollapsed ? "h-16 px-2" : "md:justify-between md:px-4",
        )}
      >
        <Logo />
      </Link>

      <Separator className="mx-auto h-[0.03rem] w-4/5" />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            link: "/dashboard",
            icon: PieChartIcon,
            variant: "secondary",
          },
          {
            title: "Users",
            icon: UsersIcon,
            link: "/dashboard/users",
            variant: "ghost",
          },
          {
            title: "Articles",
            icon: FileJsonIcon,
            link: "/dashboard/articles",
            variant: "ghost",
          },
          {
            title: "Categories",
            icon: SwatchBookIcon,
            link: "/dashboard/categories",
            variant: "ghost",
          },
          {
            title: "Activities",
            icon: ActivityIcon,
            link: "/dashboard/activity",
            variant: "ghost",
          },
          {
            title: "Archives",
            icon: ArchiveIcon,
            link: "/dashboard/archives",
            variant: "ghost",
          },
        ]}
      />

      <Separator className="mx-auto h-[0.03rem] w-4/5" />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Reports",
            icon: FilesIcon,
            link: "/dashboard/reports",
            variant: "ghost",
          },
          {
            title: "Notifications",
            icon: BellDotIcon,
            link: "/dashboard/notifications",
            variant: "ghost",
          },
          {
            title: "Updates",
            icon: AlertCircleIcon,
            link: "/dashboard/updates",
            variant: "ghost",
          },
        ]}
      />

      <Separator className="mx-auto h-[0.03rem] w-4/5" />

      <SideNav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Infrastructures",
            icon: Layers3Icon,
            link: "/dashboard/infra",
            variant: "ghost",
          },
          {
            title: "Documents",
            icon: ScrollIcon,
            link: "/docs",
            variant: "ghost",
          },
          {
            title: "Partnerships",
            icon: HandCoinsIcon,
            link: "/partners",
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}

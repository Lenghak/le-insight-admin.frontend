import { Link } from "@remix-run/react";

import ThemeChanger from "@/common/components/theme-changer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Input } from "@/common/components/ui/input";

import { cn } from "@/common/lib/utils";

import { SearchIcon } from "lucide-react";

import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";

type DashboardHeaderProps = {
  sidebarToggleButton: React.ReactNode;
};

const links: {
  link: string;
  label: string;
}[] = [
  {
    label: "Infrastructures",
    link: "/infra",
  },
  {
    label: "Documentations",
    link: "/docs",
  },
  {
    label: "Partnerships",
    link: "/partnerships",
  },
];

export default function DashboardHeader({
  sidebarToggleButton,
}: DashboardHeaderProps) {
  return (
    <header className="flex h-16 w-full flex-row items-center gap-4 bg-card">
      {sidebarToggleButton}

      {/* Search  */}
      <div className="relative flex w-full max-w-md items-center">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full border-0 pl-12"
        />

        <SearchIcon className="absolute left-4 h-4 w-4 text-muted-foreground" />
      </div>

      <nav className="flex w-full flex-row items-center justify-end gap-2">
        {links.map((link, index) => (
          <Link
            key={link.label + index}
            to={link.link}
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "font-semibold",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Separator className="h-1/2 w-[0.03rem]" />

      {/* Profiles */}
      <div className="flex items-center justify-end gap-4">
        <ThemeChanger />

        <Avatar>
          <AvatarImage />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

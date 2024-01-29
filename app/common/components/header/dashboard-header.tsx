import ThemeChanger from "@/common/components/theme-changer";
import { Input } from "@/common/components/ui/input";

import { SearchIcon } from "lucide-react";

import { ProfileDropdown } from "../profile-dropdown";
import { Separator } from "../ui/separator";

type DashboardHeaderProps = {
  sidebarToggleButton: React.ReactNode;
};

export default function DashboardHeader({
  sidebarToggleButton,
}: DashboardHeaderProps) {
  return (
    <header className="relative flex h-16 w-full flex-row items-center justify-center gap-4 bg-card px-2">
      <Separator className="h-1/2 w-[0.03rem]" />

      {sidebarToggleButton}

      {/* Search  */}
      <div className="absolute flex w-full max-w-md items-center justify-center">
        <Input
          type="text"
          placeholder="Search Le-Insight"
          className="w-full rounded-full border-0 pl-12 placeholder:ml-12 placeholder:text-center"
        />

        <SearchIcon className="absolute left-4 h-4 w-4 text-muted-foreground" />
      </div>

      {/* Profiles */}
      <div className="flex w-full items-center justify-end gap-4">
        <ThemeChanger />
        <ProfileDropdown />
      </div>
    </header>
  );
}

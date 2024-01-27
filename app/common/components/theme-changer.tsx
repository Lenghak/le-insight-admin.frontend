import { MoonStarIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function ThemeChanger({ className }: { className?: string }) {
  const [theme, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={className}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStarIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme(Theme.LIGHT)}
          className={cn(
            "gap-4 font-semibold",
            theme === Theme.LIGHT ? "font-bold" : "",
          )}
        >
          <SunIcon size={18} />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme(Theme.DARK)}
          className={cn(
            "gap-4 font-semibold",
            theme === Theme.DARK ? "font-bold" : "",
          )}
        >
          <MoonStarIcon size={18} />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

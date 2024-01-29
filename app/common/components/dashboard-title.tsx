import { cn } from "../lib/utils";
import { H3 } from "./ui/h3";
import { Muted } from "./ui/muted";

type DashboardTitleProps = {
  title: string;
  description: string;
  className?: string;
};

export default function DashboardTitle({
  title,
  description,
  className,
}: DashboardTitleProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <H3 className="font-extrabold">{title}</H3>
      <Muted className="font-semibold">{description}</Muted>
    </div>
  );
}

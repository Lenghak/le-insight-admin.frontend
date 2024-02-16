import { type LucideIcon } from "lucide-react";

import { cn } from "../lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Muted } from "./ui/muted";

type DashboardCardProps = {
  icon: LucideIcon;
  title: React.ReactNode;
  value: React.ReactNode;
  analytics: React.ReactNode;
  className?: string;
};

export default function DashboardCard(props: DashboardCardProps) {
  return (
    <Card className={cn(props.className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-widest">
          {props.title}
        </CardTitle>
        {<props.icon className="h-5 w-5" />}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-3xl font-bold">{props.value}</div>
        <Muted className="text-xs font-semibold">{props.analytics}</Muted>
      </CardContent>
    </Card>
  );
}

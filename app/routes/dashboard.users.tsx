import { columns } from "@/modules/users/components/users-columns";
import { UsersDataForm } from "@/modules/users/components/users-data-form";
import UsersTable from "@/modules/users/components/users-table";

import DashboardTitle from "@/common/components/dashboard-title";
import { Button } from "@/common/components/ui/button";

export async function loader() {
  return [
    {
      title: "Total Users",
      value: 99,
      analytics: "+20.1% from last month",
    },
    {
      title: "New Users",
      value: 53,
      analytics: "+24 since last hour",
    },
    {
      title: "Banned Users",
      value: 12,
      analytics: "+2.1% from last month",
    },
    {
      title: "Active Now",
      value: 53,
      analytics: "+24 since last hour",
    },
  ];
}

export default function Users() {
  return (
    <section className="h-full w-full space-y-6 overflow-x-auto rounded-xl bg-background p-6">
      {/* Titles & Breadcrumps */}
      <div className="flex w-full flex-row items-center justify-between">
        <DashboardTitle
          title="Users"
          description="Manage user accounts and permissions."
        />

        <div className="flex w-fit flex-row gap-4">
          <UsersDataForm />
          <Button>Download</Button>
        </div>
      </div>

      {/* Tables */}
      <UsersTable
        columns={columns}
        data={[]}
      />
    </section>
  );
}

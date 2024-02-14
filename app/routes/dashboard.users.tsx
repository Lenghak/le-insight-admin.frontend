import { columns } from "@/modules/users/components/users-columns";
import { UsersDataForm } from "@/modules/users/components/users-data-form";
import UsersTable from "@/modules/users/components/users-table";

import DashboardTitle from "@/common/components/dashboard-title";
import { Button } from "@/common/components/ui/button";

import useGetUsers from "@/common/api/users/query/use-get-users";

export default function Users() {
  const { data } = useGetUsers();

  console.log(data);

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
          <Button>
            <span className="font-bold">Download</span>
          </Button>
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

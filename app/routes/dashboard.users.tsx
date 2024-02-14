import { useLoaderData } from "@remix-run/react";

import { columns } from "@/modules/users/components/users-columns";
import { UsersDataForm } from "@/modules/users/components/users-data-form";
import UsersTable from "@/modules/users/components/users-table";

import DashboardTitle from "@/common/components/dashboard-title";
import { Button } from "@/common/components/ui/button";

import { getQueryClient } from "@/common/lib/query";

import getUsersList from "@/common/api/users/axios/get-users-list";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export async function loader() {
  const queryClient = getQueryClient();

  await queryClient.fetchQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsersList(),
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default function Users() {
  const { dehydratedState } = useLoaderData<typeof loader>();

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
      <HydrationBoundary state={dehydratedState}>
        <UsersTable
          columns={columns}
          data={[]}
        />
      </HydrationBoundary>
    </section>
  );
}

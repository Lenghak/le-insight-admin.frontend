import { Fragment } from "react";

import { columns } from "@/modules/users/components/users-columns";
import { UsersDataForm } from "@/modules/users/components/users-data-form";
import UsersTable from "@/modules/users/components/users-table";

import DashboardTitle from "@/common/components/dashboard-title";
import ErrorSection from "@/common/components/error/error.section";
import Logo from "@/common/components/logo";
import { Button } from "@/common/components/ui/button";

import getUsersList from "@/common/api/users/get-users-list";

export async function loader() {
  return await getUsersList();
}

export default function Users() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export function HydrateFallback() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <Logo className="h-48 w-48 animate-pulse opacity-5 invert" />
    </main>
  );
}

export function ErrorBoundary() {
  return (
    <ErrorSection
      title="Something went wrong!"
      description="There was a technical problem on our end. Please try again."
    />
  );
}

import DashboardTitle from "@/common/components/dashboard-title";

export default function Users() {
  return (
    <section className="h-full w-full space-y-6 rounded-xl bg-background p-6">
      {/* Titles & Breadcrumps */}
      <div className="flex w-full flex-row">
        <DashboardTitle
          title="Users"
          description="Manage user accounts and permissions."
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 grid-rows-1 gap-6"></div>

      {/* Tables */}
      {/* <UsersTable
        columns={columns}
        data={
          [
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "728ed52f",
              amount: 100,
              status: "pending",
              email: "m@example.com",
            },
            {
              id: "489e1d42",
              amount: 125,
              status: "processing",
              email: "example@gmail.com",
            },
          ] as Payment[]
        }
      /> */}
    </section>
  );
}

import { columns } from "@/modules/users/users.columns";
import UsersTable from "@/modules/users/users.table";

export default function Users() {
  return (
    <section className="h-full w-full space-y-6 rounded-xl bg-background">
      <section className="px-6">
        {/* Tables */}
        <UsersTable
          columns={columns}
          data={[
            {
              id: "728ed52f",
              amount: 100,
              status: "pending" as const,
              email: "m@example.com",
            },
          ]}
        />
      </section>
    </section>
  );
}

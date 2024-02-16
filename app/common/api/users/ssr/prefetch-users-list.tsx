import { getQueryClient } from "@/common/lib/query";

import getUsersList from "@/common/api/users/axios/get-users-list";

export default async function prefetchUsersList() {
  const queryClient = getQueryClient();

  await queryClient.fetchQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsersList(),
  });

  return queryClient;
}

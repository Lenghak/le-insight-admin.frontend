import { useQuery } from "@tanstack/react-query";

import getUsersList from "../axios/get-users-list";

export default function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsersList(),
    gcTime: 60 * 1000,
  });
}

import { QueryClient } from "@tanstack/react-query";

/* The `getQueryClient` function is exporting an instance of the `QueryClient` class from the
`@tanstack/react-query` library. */
export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { gcTime: 60 * 1000 },
    },
  });

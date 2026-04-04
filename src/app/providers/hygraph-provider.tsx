import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import type { ReactNode } from "react";

const client = new Client({
  url: import.meta.env.VITE_HYGRAPH_API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

export const HygraphProvider = ({ children }: { children: ReactNode }) => {
  return <Provider value={client}>{children}</Provider>;
};

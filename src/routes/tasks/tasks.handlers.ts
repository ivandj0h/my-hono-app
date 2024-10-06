import type { AppRouteHandler } from "@/interface/app-bindings";

import type { ListRoute } from "./tasks.routes";

export const list: AppRouteHandler<ListRoute> = (c) => {
  return c.json([{
    name: "Learn HONO",
    done: false,
  }]);
};

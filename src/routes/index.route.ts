import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/create-app";

const router = createRouter()
  .openapi(createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "My Hono App Index",
      },
    },
  }), (c) => {
    return c.json({
      message: "My Hono App API",
    });
  });

export default router;

import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(z.object({
        name: z.string(),
        done: z.boolean(),
      })),
      "The Lists of the Tasks",
    ),
  },
});

export type ListRoute = typeof list;

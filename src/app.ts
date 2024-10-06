import { OpenAPIHono } from "@hono/zod-openapi";
import { onError } from "stoker/middlewares";
import notFound from "stoker/middlewares/not-found";

import type { AppBindings } from "./interface/app-bindings";

import { pinoLogger } from "./middlewares/pino-logger";

const app = new OpenAPIHono<AppBindings>();
app.use(pinoLogger());

// base endpoint
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// error handler
app.get("/error", (c) => {
  c.status(500);
  c.var.logger.info("All logs would be appear here!!");
  throw new Error("Oh No!!, there're many Error's below!!");
});

// not found
app.notFound(notFound);
app.onError(onError);

export default app;

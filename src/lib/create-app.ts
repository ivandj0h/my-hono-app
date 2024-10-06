import { OpenAPIHono } from "@hono/zod-openapi";
import { onError, serveEmojiFavicon } from "stoker/middlewares";
import notFound from "stoker/middlewares/not-found";

import type { AppBindings } from "@/interface/app-bindings";

import { pinoLogger } from "@/middlewares/pino-logger";

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false
  });
  app.use(serveEmojiFavicon("😍"));
  app.use(pinoLogger());
  app.notFound(notFound);
  app.onError(onError);

  return app;
}

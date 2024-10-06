import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "@/interface/app-bindings";

import packageJSON from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "my-hono-app",
    },
  });

  app.get("/reference", apiReference({
    theme: "bluePlanet",
    layout: "modern",
    defaultHttpClient: {
      targetKey: "node",
      clientKey: "axios",
    },
    spec: {
      url: "/doc",
    },
  }));
}

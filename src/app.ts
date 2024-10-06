import configureOpenAPI from "@/lib/configure-openapi";
import createApp from "@/lib/create-app";

const app = createApp();

configureOpenAPI(app);

export default app;

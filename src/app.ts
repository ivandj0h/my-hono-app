import configureOpenAPI from "@/lib/configure-openapi";
import createApp from "@/lib/create-app";
import index from "@/routes/index.route";
import tasks from "@/routes/tasks/tasks.index";

const app = createApp();
const routes = [index, tasks];

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;

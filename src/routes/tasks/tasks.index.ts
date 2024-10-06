import { createRouter } from "@/lib/create-app";

import * as handlers from "./tasks.handlers";
import * as routes from "./tasks.routes";

const router = createRouter().openapi(routes.list, handlers.list);

export default router;

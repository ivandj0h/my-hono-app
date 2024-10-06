import createApp from "@/lib/create-app";

const app = createApp(); 

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


export default app;

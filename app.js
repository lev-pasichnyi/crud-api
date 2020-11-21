// use express for start a server
import express from 'express'
const app = express()

// middleware for api routes: localhost:5000/api/
import crudRouter from "./routes/crudRouter.js";
app.use("/api", crudRouter);

// if .env not present then listen on port 5000
const PORT = process.env.PORT || "5000";

// start a server on  PORT
app.listen(PORT, () => {
  console.log("server is online...");
});

import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import Config from "./configuration/Config";
import path from "path";
import Routing from "./routes/Routing";
const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  next();
  if (res.statusCode >= 400) throw new Error(`at ${req.method} ${req.path}`);
});

Routing.setRoutes(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Apply Middleware
// app.use(Middleware.notFound);
// app.use(Middleware.errorHandler);

Config.startServer(app);
Config.connectToMongoDB();

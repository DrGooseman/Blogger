import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";

const cors = require("cors");

const app: Application = express();
app.use(express.json());
app.use(cors());

const routes: Router = require("./routes/routes");

app.use("/", routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Route not found.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));

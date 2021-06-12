import express from "express";
const cors = require("cors");
import routes from "./routes";
import "../src/database/connect";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3000, () =>
  console.log("🔥 Server strated at http://localhost:3000")
);

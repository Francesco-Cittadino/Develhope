import express from "express";
import "express-async-errors";
import morgan from "morgan";

import {
  getAll,
  getOneByid,
  create,
  updateById,
  deleteById,
} from "./component/planet";

const app = express();
const port = 3000;


app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planet", getAll);

app.get("/api/planet:id", getOneByid);

app.post("/api/planet:id", create);

app.put("/api/planet:id", updateById);

app.delete("/api/planet:id", deleteById);

app.listen(port);

import express from "express";
import "express-async-errors";
import morgan from "morgan";
import pg from "pg-promise";
import multer from "multer"
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  uploadImg
} from "./component/planet";

const pgp = pg();
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname)
  },
})

const uploader = multer({storage: storage})

export const db = pgp("postgres://postgres:dbAccess@localhost:5432/video");
const setupDatabase = async () => {
  await db.none(`
        DROP TABLE IF EXISTS planets;
        CREATE TABLE planets(
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL)
    `);
  await db.none("INSERT INTO planets (name) VALUES ('Earth')");
  await db.none("INSERT INTO planets (name) VALUES ('Mars')");
  await db.none("INSERT INTO planets (name) VALUES ('Jupiter')");
};

setupDatabase();

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/planet", getAll);

app.get("/api/planet:id", getOneById);

app.post("/api/planet:id", create);

app.put("/api/planet:id", updateById);

app.delete("/api/planet:id", deleteById);

app.post("/api/planets/:id/image", uploader.single("image"), uploadImg)

app.listen(port);

import { Request, Response } from "express";
import pkg from "joi";
import pg from "pg-promise"
const pgp = pg();
const { string } = pkg;
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

export const db = pgp(
  "postgres://postgres:dbAccess@localhost:5432/video"
);
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

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many("SELECT * FROM planets");
  res.status(200).json(planets);
};

const getOneByid = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.oneOrNone("SELECT * FROM planets WHERE id=$1", id);
  planet
    ? res.status(200).json(planet)
    : res.status(401).json({ msg: "planet not found" });
};
const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ msg: "you have to provide a name!" });
    return;
  }
  await db.none("INSERT INTO planets (name) VALUES ($1)", name);
  res.status(201).json({ msg: "planet created" });
};

const updateById = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  if (!id) {
    res.status(400).json({ msg: "you have to provide an id!" });
    return;
  }
  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
  res.status(200).json({ msg: "planet updated" });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) {
    res.status(400).json({ msg: "you have to provide an id!" });
    return;
  }
  await db.none("DELETE FROM planets WHERE id=$1", id);
  res.status(200).json({ msg: "planet deleted" });
};

export { getAll, getOneByid, create, updateById, deleteById };

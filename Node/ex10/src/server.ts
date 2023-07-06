import dotenv from "dotenv";
import express from "express"
import morgan from "morgan";
const app = express()
dotenv.config()
// Write simple Express server that listens on port 3000 (use dotenv to specify the port)
// Create a dummy "database" of planets using a let variable. (You will use this data in further exercises.)
// Configure your app (app.use()) to:
// accept JSON from the Client
// log the Client's requests

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

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

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res) => {
    console.log(req)
    res.status(200).json(req.body)
})

app.listen(process.env.PORT, () => console.log(`Server listening at port ${process.env.PORT}`))


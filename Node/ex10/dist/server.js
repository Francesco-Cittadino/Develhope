import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
const app = express();
dotenv.config();
let planets = [
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
    console.log(req);
    res.status(200).json(req.body);
});
app.listen(process.env.PORT, () => console.log(`Server listening at port ${process.env.PORT}`));

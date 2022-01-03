import express from "express";
import {} from "dotenv/config";
import cors from "cors";
import bodyparser from "body-parser";
import register from "./routes/register.js";

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.status(200).send();
});

app.use("/user", register);

app.listen(process.env.PORT, () => {
	console.log(`Connect on port: ${process.env.PORT}`);
});

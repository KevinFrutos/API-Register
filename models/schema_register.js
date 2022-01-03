import pkg from "mongoose";
const { Schema } = pkg;
import connection from "../database/dbUsers.js";

const schema = new Schema({
	user: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	passwd: { type: String, required: true },
});

export default connection.model("Register", schema);

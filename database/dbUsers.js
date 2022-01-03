import mongoose from "mongoose";

const url_usuarios = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DBUSERS}?retryWrites=true&w=majority`;

const connection = mongoose.createConnection(url_usuarios, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

connection.on("error", err => {
	console.log(err);
});

export default connection;

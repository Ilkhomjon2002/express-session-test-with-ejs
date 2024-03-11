const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const { default: mongoose } = require("mongoose");
const MongodbStore = require("connect-mongodb-session")(session);

const app = express();

const store = new MongodbStore({
	uri: "mongodb://localhost:27017/admin",
	collection: "sessions",
});

app.use(helmet());
app.use(cors());
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false, //do not save any uninitialized requests
		store,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
		},
	})
);
app.get("/", (req, res) => {
	console.log(req.session);
	console.log(req.session.id);
	//Initializing
	req.session.isAuthed = true;
	res.status(200).send("Hello world");
});

app.listen(8080, async () => {
	await mongoose.connect("mongodb://localhost:27017/admin");
	console.log("Server is running on port 8080");
});

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const { default: mongoose } = require("mongoose");
const MongodbStore = require("connect-mongodb-session")(session);
const path = require("path");
const router = require("./router/router");
const app = express();

const store = new MongodbStore({
	uri: "mongodb://localhost:27017/admin",
	collection: "sessions",
});

app.use(express.json());
app.use(express.urlencoded());
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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", router);

app.listen(8080, async () => {
	await mongoose.connect("mongodb://localhost:27017/admin");
	console.log("Server is running on port 8080");
});

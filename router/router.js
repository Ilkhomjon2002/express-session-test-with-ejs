const router = require("express").Router();
const loginRoutes = require("../controllers/login");
const registerRoutes = require("../controllers/register");
const dashboardRoutes = require("../controllers/dashboard");
const isAuthed = require("../middlewares/authCheck");
// app.get("/", (req, res) => {
// 	console.log(req.session);
// 	console.log(req.session.id);
// 	//Initializing
// 	req.session.isAuthed = true;
// 	res.status(200).send("Hello world");
// });

router.get("/", (_, res) => {
	res.send("hello");
});

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/dashboard", isAuthed, dashboardRoutes);

module.exports = router;

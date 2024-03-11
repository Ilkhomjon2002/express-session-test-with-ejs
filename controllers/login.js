const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("login");
});

router.post("/", (req, res) => {
	console.log(req.body);
	res.status(200).json({ message: "success" });
});
module.exports = router;

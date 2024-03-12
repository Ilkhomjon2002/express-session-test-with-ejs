const router = require("express").Router();
const userModel = require("../models/userSchema");
router.get("/", (req, res) => {
	res.render("register");
});

router.post("/", async (req, res) => {
	const { email, password } = req.body;
	try {
		const data = await userModel.create({ email, password });
		console.log(data);
		return res.redirect("/login");
	} catch (error) {
		console.log(error);
	}

	console.log(data);
});
module.exports = router;

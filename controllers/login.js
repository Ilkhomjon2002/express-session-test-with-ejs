const userModel = require("../models/userSchema");

const router = require("express").Router();

router.get("/", (req, res) => {
	res.render("login");
});

router.post("/", async (req, res) => {
	const { email, password } = req.body;
	const data = await userModel.findOne({ email });
	if (!data || data.password != password) return res.redirect("/register");

	req.session.user = {
		email: data.email,
		id: data._id,
		isAuthed: true,
	};

	console.log(data);

	return res.redirect("/dashboard");
});
module.exports = router;

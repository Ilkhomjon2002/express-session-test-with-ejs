const router = require("express").Router();

router.get("/", (req, res) => {
	return res.render("dashboard", { data: req.session });
});
router.post("/logout", (req, res) => {
	req.session.destroy();
	return res.redirect("/login");
});
module.exports = router;

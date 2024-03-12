module.exports = (req, res, next) => {
	console.log(req.session);

	if (req?.session?.user?.isAuthed) {
		console.log("Authed");
		next();
	} else {
		return res.redirect("/login");
	}
};

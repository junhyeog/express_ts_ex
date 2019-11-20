import express from "express"
var router = express.Router()
import eat from "../controller/eat"

router.get("/", function(req, res, next) {
	res.render("index", eat(req.query.date, req.query.time))
	// res.send(eat(req.query.date, req.query.time))
})

export default router

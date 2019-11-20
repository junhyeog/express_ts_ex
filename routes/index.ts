import express from "express"
var router = express.Router()
import eat from "../controller/eat"

router.get("/", function(req, res, next) {
	const dateList = { mon: 0, tue: 0, wen: 0, thu: 0, fri: 0 }
	const timeList = { morning: 0, lunch: 0, dinner: 0 }
	const date = req.query.date
	const time = req.query.time
	if (!(date in dateList) || !(time in timeList)) res.send("Bad Request!")
	else res.render("index", eat(date, time))
})
router.get("/semantic/:date/:time", function(req, res, next) {
	const dateList = { mon: 0, tue: 0, wen: 0, thu: 0, fri: 0 }
	const timeList = { morning: 0, lunch: 0, dinner: 0 }
	const date = req.params.date
	const time = req.params.time
	if (!(date in dateList) || !(time in timeList)) res.send("Bad Request!")
	else res.render("index", eat(date, time))
})
export default router

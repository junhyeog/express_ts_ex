import express from "express"
var router = express.Router()
import { getDiet } from "../controller/diet"
import DietModel, { Daytime } from "../model/diet"

router.get("/", async function(
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) {
	const testdatas = await DietModel.find()
	if (!testdatas) console.log("none!!")
	else console.log(testdatas.length)
	// testdatas.map((testdata, idx) => {
	// 	console.log(
	// 		testdata.month,
	// 		testdata.date,
	// 		testdata.daytime,
	// 		testdata.menus,
	// 		idx
	// 	)
	// })
	return res.send("check server console!")
})

router.get("/semantic/:month/:date/:daytime", async function(
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) {
	try {
		const ans = await getDiet(
			Number(req.params.month),
			Number(req.params.date),
			req.params.daytime as Daytime
		)
		return res.render("index", {
			month: req.params.month,
			date: req.params.date,
			daytime: req.params.daytime,
			menus: ans
		})
	} catch (err) {
		console.log(err)
		return res.send("error occured")
	}
})

export default router

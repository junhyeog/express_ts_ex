import DietModel, { Daytime } from "../model/diet"

export async function getDiet(month: number, date: number, daytime: Daytime) {
	const ans = await DietModel.findOne({
		month: month,
		date: date,
		daytime: daytime
	})
	if (!ans) return ["식단 정보가 없습니다."]
	else return ans.menus
}

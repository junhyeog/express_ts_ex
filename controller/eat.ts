import { recipe } from "../model/eat"

export default (date: number, time: string) => {
	//ex mon moring
	// 월요일~금요일을 18~22로 바꾸기
	// 조식/중식/석식을 0 ~ 2로 바꾸기
	// model에서 data 불러오기
	var timeNum = -1
	if (time == "morning") timeNum = 0
	else if (time == "lunch") timeNum = 1
	else if (time == "dinner") timeNum = 2
	const menus = recipe[date - 18][timeNum]
	console.log(recipe[date - 18][timeNum])

	return { menus: menus, dayNum: date, time: time }
}

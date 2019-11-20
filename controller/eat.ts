import { recipe } from "../model/eat"

export default (date: string, time: string) => {
	//ex mon moring
	// 월요일~금요일을 18~22로 바꾸기
	// 조식/중식/석식을 0 ~ 2로 바꾸기
	// model에서 data 불러오기

	var dayNum = -1
	if (date == "mon") dayNum = 18
	else if (date == "tue") dayNum = 19
	else if (date == "wen") dayNum = 20
	else if (date == "thu") dayNum = 21
	else if (date == "fri") dayNum = 22

	var timeNum = -1
	if (time == "morning") timeNum = 0
	else if (time == "lunch") timeNum = 1
	else if (time == "dinner") timeNum = 2
	const menus = recipe[dayNum - 18][timeNum]
	console.log(recipe[dayNum - 18][timeNum])

	return { menus: menus, dayNum: dayNum, time: time }
}

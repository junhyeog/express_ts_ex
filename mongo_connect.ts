import mongoose from "mongoose"

export default function mongo_connect() {
	const db = "mongodb://localhost/diet"
	mongoose
		.connect(db, {
			useNewUrlParser: true
		})
		.then(() => {
			console.log("Connected to MONGODB")
		})
		.catch(async (err: any) => {
			console.log("ERROR: ", err)
			await setTimeout(mongo_connect, 3000)
		})
}

/*
C:\Program Files\MongoDB\Server\4.2\bin> mongo
> use diet
> db.printCollectionStats() # diets 찍힘
> db.diets.help() # 모를 떈 .help() 붙이면 도움말 나옴 -> find 함수 확인
> db.diets.find() # data 확인
*/

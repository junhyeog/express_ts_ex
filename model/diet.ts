import mongoose from "mongoose"
import { recipe } from "./eat"
export type Daytime = "morning" | "lunch" | "dinner"

export interface Diet extends mongoose.Document {
	month: number
	date: number
	daytime: Daytime
	menus: string[]
}

// mongoose schema: https://mongoosejs.com/docs/api/schema.html#schema_Schema
const schema = new mongoose.Schema({
	month: {
		required: true,
		type: Number
	},
	date: {
		required: true,
		type: Number
	},
	daytime: {
		required: true,
		type: String
	},
	menus: {
		default: [],
		type: [
			{
				type: String
			}
		]
	}
})

// mongoose model: https://mongoosejs.com/docs/models.html
const DietModel = mongoose.model<Diet>("diet", schema)
const daytimelist = ["morning", "lunch", "dinner"]
if (!DietModel.find())
	recipe.map((daymenus, idx) => {
		daymenus.map((menus, i) => {
			DietModel.create({
				month: 11,
				date: 18 + idx,
				daytime: daytimelist[i],
				menus: menus
			})
		})
	})
export default DietModel

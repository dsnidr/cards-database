import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Squirtle"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card

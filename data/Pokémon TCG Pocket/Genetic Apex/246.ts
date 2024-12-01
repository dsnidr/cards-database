import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pay Day"
		},

		effect: {
			en: "Draw 1 card."
		},

		damage: "10"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card

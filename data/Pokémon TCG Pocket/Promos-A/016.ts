import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Clefairy"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Slap"
		},

		cost: ["Psychic"],
		damage: 20
	}],

	hp: 60,

	description: {
		en: "It is said that happiness will come to those who<br />see a gathering of Clefairy dancing under a<br />full moon."
	},

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
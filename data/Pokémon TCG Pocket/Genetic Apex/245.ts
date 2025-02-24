import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Drive Off"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent choses the new Active Pokémon.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack"
		},

		damage: "70"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card

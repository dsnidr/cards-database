import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Bayleef",
		fr: "Macronium",
		de: "Lorblatt"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		153,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Chikorita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mysterious Powder",
				fr: "Poudre mystérieuse",
				de: "Mysteriöses Puder"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
				de: "Rasierblatt"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card

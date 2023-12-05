import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill",
		de: "Marill"
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		183,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Sleepy Ball",
				fr: "Boule dodo",
				de: "Schlafball"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card

import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud'krane",
				de: "Schädelwumme"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Dust Devil",
				fr: "Tempête de sable",
				de: "Sandteufel"
			},
			effect: {
				en: "Does 10 damage to each non- Pokémon in play. Don't apply Weakness and Resistance.",
				fr: "Inflige 10 dégâts à chaque Pokémon non- en jeu. N'appliquez pas la Faiblesse et la Résistance.",
				de: "Fügt jedem Pokémon im Spiel, das nicht vom Typ  ist, 10 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Sa carapace est dure comme de la pierre, et elle le rend très fort. Ses coups peuvent renverser une montagne."
	}
}

export default card

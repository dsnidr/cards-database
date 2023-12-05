import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Joliflor",
		de: "Blubella"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Duflor",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Parallel Gain",
				fr: "Gain parallèle",
				de: "Allgemeine Erholung"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Blend Pollen",
				fr: "Mélange de pollen",
				de: "Pollenmischung"
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Vileplume and each Bellossom you have in play. Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Rafflesia et chaque Joliflor que vous avez en jeu. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenspunkte für jedes Giflor und jedes Blubella, das du im Spiel hast, zu. Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "À la fin de la saison des pluies, il sort danser en plein air, attiré par la chaleur du soleil."
	}
}

export default card

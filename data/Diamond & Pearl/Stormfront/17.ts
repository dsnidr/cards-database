import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		de: "Zwirrfinst"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Dusclops",
		fr: "Teraclope",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Spirit Pulse",
				fr: "Vibration spirituelle",
				de: "Geisterpuls"
			},
			effect: {
				en: "As long as Dusknoir is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Energy attached to it between turns.",
				fr: "Tant que Noctunoir est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant de l'Énergie entre deux tours.",
				de: "Solange Zwirrfinst dein Aktives Pokémon ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Pokémon deines Gegners, an dem mindestens 1 Energie angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Mist",
				fr: "Brume obscurité",
				de: "Finsterer Nebel"
			},
			effect: {
				en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégât, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 2 Schadensmarken liegen, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "L'antenne sur sa tête capte les ondes radio du monde des esprits lui ordonnant d'y porter des gens."
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		de: "Nockchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Counter Punch",
				fr: "Contre-poing",
				de: "Konterhieb"
			},
			effect: {
				en: "During your opponent's next turn, if Hitmonchan is damaged by an opponent's attack (even if Hitmonchan is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, si une attaque de votre adversaire inflige des dégâts à Tygnon (même si Tygnon est mis K.O), placez 4 marqueurs de dégât sur le Pokémon Attaquant.",
				de: "Wenn Nockchan im nächsten Zug deines Gegners durch einen gegnerischen Angriff Schaden erhält (auch wenn Nockchan dadurch kampfunfähig wird), lege 4 Schadensmarken auf das Angreifende Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Gut Strike",
				fr: "Coup d'tripes",
				de: "Magenschlag"
			},
			effect: {
				en: "If Tyrogue is anywhere under Hitmonchan, this attack's base damage is 60 instead of 30.",
				fr: "Si Debugant se trouve sous Tygnon, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
				de: "Wenn Rabauz sich an beliebiger Stelle unter Nockchan befindet, beträgt der Grundschaden dieses Angriffs 60 Schadenspunkte."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Même le béton cède sous ses poings dévastateurs. Au combat, il s'essouffle au bout de 3 minutes."
	}
}

export default card

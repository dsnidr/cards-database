import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-93",
	localId: 93,

	// Card informations
	name: {
		en: "Darkness Energy",
		fr: "Énergie Obscurité",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/93/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/93/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/93/high",
		},
	},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",



	effect: {
		fr: "Si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Obscurité est attachée n'est pas Darkness. Énergie Obscurité fournit de l'Énergie Darkness. (Elle ne compte pas comme carte Énergie de base).",
	},







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

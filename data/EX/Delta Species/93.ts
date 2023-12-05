import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Mentor",
		fr: "Mentor Holon",
		de: "Holon-Lehrer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nDéfaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nChoisissez dans votre deck jusqu'à 3 Pokémon de base possédant chacun 100 Points de vie maximum, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Discard a card from your hand. If you can't discard a card from your hand, you can't play this card. Search your deck for up to 3 Basic Pokémon that each has 100 HP or less, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
	}
}

export default card

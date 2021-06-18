import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Énergie Impact",
		en: "Impact Energy"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		fr: "Cette carte ne peut être attachée qu’à un Pokémon Poing Final. Si cette carte est attachée à autre chose qu’un Pokémon Poing Final, défaussez-la.\nTant que cette carte est attachée à un Pokémon, elle fournit tout type d’Énergie mais seulement une Énergie à la fois. Le Pokémon auquel cette carte est attachée ne peut pas être Empoisonné. Si ce Pokémon est déjà Empoisonné, il guérit de cet État Spécial.",
		en: "This card can only be attached to a Single Strike Pokémon. If this card is attached to anything other than a Single Strike Pokémon, discard this card.\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. The Pokémon this card is attached to can’t be Poisoned, and if it is already Poisoned, it recovers from that Special Condition."
	},

	energyType: "Special",
	regulationMark: "E"
}

export default card
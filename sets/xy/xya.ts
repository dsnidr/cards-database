import Set from '@tcgdex/sdk/interfaces/Set'

const set: Set = {
	name: {
		en: "Yello A Alternate",
		fr: "carte alternative A Jaune",
	},
	code: "xya",
	expansionCode: "xy",
	// tcgoCode: "XY",

	cardCount: {
		total: 6,
		official: 6
	},

	api: "a-xy",

	releaseDate: "2014-02-05",

	legal: {
		standard: false,
		expanded: false,
	},

	images: {
		symbol: "https://assets.tcgdex.net/univ/xy/xya/symbol",
		logo: "https://assets.tcgdex.net/en/xy/xya/logo"
	}
}

export default set

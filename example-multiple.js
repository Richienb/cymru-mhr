const mhr = require(".")

module.exports = (async () => {
	const detectionResult = await mhr.multiple(["7697561ccbbdd1661c25c86762117613", "d48a85139dde1eb00ee7460e80f42c35", "30ed21fa6e96f58bcd0c16e4f52ace82"])

	for (const [hash, { lastSeen, detectionRate }] of Object.entries(detectionResult)) {
		console.log(`${hash} was last seen on ${new Date(lastSeen * 1000).toString()} and was detected by ${detectionRate} antivirus engines`)
	}
})()

const mhr = require(".")

module.exports = (async () => {
	const { lastSeen, detectionRate } = await mhr("7697561ccbbdd1661c25c86762117613")

	console.log(`Last seen on ${new Date(lastSeen * 1000).toString()}`)
	console.log(`Detected by ${detectionRate} antivirus engines`)
})()

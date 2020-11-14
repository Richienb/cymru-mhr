"use strict"

const net = require("net")
const pEvent = require("p-event")
const fromEntries = require("fromentries")

const checkMultiple = async hashes => {
	const client = net.connect({
		port: 43,
		host: "hash.cymru.com"
	})

	client.setEncoding("utf8")

	client.end(`begin
${hashes.join("\n")}
end`)

	const result = await pEvent(client, "data")

	client.destroy()

	return fromEntries(result.split("\n").slice(2, -1).map(scanResult => {
		const [hash, lastSeen, detectionRate] = scanResult.split(" ")
		return [hash, {
			lastSeen: Number(lastSeen),
			detectionRate: detectionRate === "NO_DATA" ? 0 : Number(detectionRate)
		}]
	}))
}

module.exports = async hash => Object.values(await checkMultiple([hash]))[0]

module.exports.multiple = checkMultiple

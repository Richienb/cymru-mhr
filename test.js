const test = require("ava")
const mhr = require(".")

const fixture = ["7697561ccbbdd1661c25c86762117613", "d48a85139dde1eb00ee7460e80f42c35", "30ed21fa6e96f58bcd0c16e4f52ace82"]

test("main", async t => {
	const { lastSeen, detectionRate } = await mhr(fixture[0])

	t.is(typeof lastSeen, "number")
	t.is(typeof detectionRate, "number")
})

test(".multiple()", async t => {
	for (const [hash, { lastSeen, detectionRate }] of Object.entries(await mhr.multiple(fixture))) {
		t.is(typeof hash, "string")
		t.is(typeof lastSeen, "number")
		t.is(typeof detectionRate, "number")
	}
})

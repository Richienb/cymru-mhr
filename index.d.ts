declare namespace mhr {
	export interface DetectionResult {
		/**
		The timestamp since the hash was last seen by the api.
		*/
		lastSeen: number

		/**
		The amount of antivirus engines to identify the hash as dangerous.
		*/
		detectionRate: number
	}
}

declare const mhr: {
	/**
	Check if file hashes are dangerous using the [Team CYMRU Malware Hash Registry](https://team-cymru.com/community-services/mhr).

	@param hashes An array of MD5 or SHA1 hashes to check.

	@example
	```
	const mhr = require("cymru-mhr")

	const detectionResult = await mhr.multiple(["7697561ccbbdd1661c25c86762117613", "d48a85139dde1eb00ee7460e80f42c35", "30ed21fa6e96f58bcd0c16e4f52ace82"])

	for (const [hash, { lastSeen, detectionRate }] of Object.entries(detectionResult)) {
		console.log(`${hash} was last seen on ${new Date(lastSeen * 1000).toString()} and was detected by ${detectionRate} antivirus engines`)
	}
	```
	*/
	multiple: <HashValueType extends string>(hashes: HashValueType[]) => Promise<Record<HashValueType, mhr.DetectionResult>>

	/**
	Check if a file hash is dangerous using the [Team CYMRU Malware Hash Registry](https://team-cymru.com/community-services/mhr).

	@param hash The MD5 or SHA1 hash to check.

	@example
	```
	const mhr = require("cymru-mhr")

	const { lastSeen, detectionRate } = await mhr("7697561ccbbdd1661c25c86762117613")

	console.log(`Last seen on ${new Date(lastSeen * 1000).toString()}`)
	console.log(`Detected by ${detectionRate} antivirus engines`)
	```
	*/
	(hash: string): Promise<mhr.DetectionResult>
}

export = mhr

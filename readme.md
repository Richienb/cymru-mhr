# cymru-mhr [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/cymru-mhr/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/cymru-mhr)

Check if file hashes are dangerous using the CYMRU Malware Hash Registry.

[![NPM Badge](https://nodei.co/npm/cymru-mhr.png)](https://npmjs.com/package/cymru-mhr)

## Install

```sh
npm install cymru-mhr
```

## Usage

```js
const mhr = require("cymru-mhr")

const { lastSeen, detectionRate } = await mhr("7697561ccbbdd1661c25c86762117613")

console.log(`Last seen on ${new Date(lastSeen * 1000).toString()}`)
console.log(`Detected by ${detectionRate} antivirus engines`)
```

## API

### mhr(hash)

Check if a file hash is dangerous using the CYMRU Malware Hash Registry. Returns a promise that resolves with `{ lastSeen: number, detectionRate: number }`.

### mhr.multiple(hashes)

Check if file hashes are dangerous using the CYMRU Malware Hash Registry. Returns a promise that resolves with an array of `{ lastSeen: number, detectionRate: number }`.

#### hash

Type: `string`

The MD5 or SHA1 hash to check.

#### hashes

Type: `string[]`

An array of MD5 or SHA1 hashes to check.

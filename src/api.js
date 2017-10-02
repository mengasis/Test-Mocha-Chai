import fetch from 'isomorphic-fetch'

const URLBASE = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=CLP'

const priceBtcInClp = async () => {
    const result = await fetch(URLBASE)
    const response = await result.json()
    return !response ? null : response[0].price_clp
}

export {priceBtcInClp}
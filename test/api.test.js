import fetch from 'isomorphic-fetch'
import { expect } from 'chai'

const URLBASE = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=CLP'


describe('**API Bitcoin**', () => {

	var response, result

	before(async () => {
		response = await fetch(URLBASE)
		result = await response.json()
		result = result[0]
	})

	describe('Status API', async () =>{
		it('Status HTTP 200', () => expect(response.status).to.equal(200))
		it('Is result a Object?', () => expect(result).to.be.an('object'))
		it('Has prop price_clp?', () => expect(result).to.have.ownProperty('price_clp'))
	})

})
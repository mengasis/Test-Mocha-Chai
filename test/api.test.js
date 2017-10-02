import fetch from 'isomorphic-fetch'
import { expect } from 'chai'

const URLBASE = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=CLP'

describe('API Bitcoin', () => {
    describe('Bitcoin to CLP', () => {
        it('return status HTTP 200', (done) => {
            fetch(URLBASE)
            .then((res) => {
                expect(res.status).to.equal(200)
                done()
            })
        })
    })
})


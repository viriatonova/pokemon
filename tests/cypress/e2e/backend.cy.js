
describe('Backend testing', () => {
    it('Health Checker', () => {
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: "http://localhost:9100/api/v1",
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Api is running")
        })
    })
    it('Get All Pokemons', () => {
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: "http://localhost:9100/api/v1/pokemon",
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.not.be.empty
        })
    })
    it('Get Pokemon success', () => {
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: "http://localhost:9100/api/v1/pokemon/pikachu",
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data.name_uq).to.eq("pikachu")
        })
    })
    it('Get Pokemon fail', () => {
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: "http://localhost:9100/api/v1/pokemon/nada",
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body.message).to.eq("not content")
        })
    })
})
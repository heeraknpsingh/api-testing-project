describe("API Tests: Filter books by price greater then value", function(){
    it("should fetch 2 books for price greater then value ", function(){
        cy.request("GET", "books?price_gte=15").as("book")
        cy.get("@book").should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(2)
          expect(response.body[0].price).to.eq(15)
          expect(response.body[1].price).to.eq(16)
        })
    })
})
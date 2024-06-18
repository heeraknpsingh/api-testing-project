describe("API Tests: Filter books by title name", function(){
    it("should fetch details for a title with one book ", function(){
        cy.request("GET", "books?title=Book5").as("book")
        cy.get("@book").should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(1)
          expect(response.body[0].title).to.eq('Book5')
        })
    })
})
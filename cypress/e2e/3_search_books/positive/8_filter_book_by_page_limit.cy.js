describe("API Tests: Filter books by page limit", function(){
    it("should fetch 3 books for page limit 3 ", function(){
        cy.request("GET", "books?_limit=3").as("book")
        cy.get("@book").should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(3)
          expect(response.body[0].title).to.eq('Book1')
          expect(response.body[1].title).to.eq('Book2')
          expect(response.body[2].title).to.eq('Book3')
        })
    })
})
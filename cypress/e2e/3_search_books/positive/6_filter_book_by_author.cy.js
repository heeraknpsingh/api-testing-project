describe("API Tests: Filter books by author name", function(){
    it("should fetch details for a auther have one book ", function(){
        cy.request("GET", "books?author=Author1").as("book")
        cy.get("@book").should((response) => {
          // Verify status code
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(1)
          expect(response.body[0].author).to.eq('Author1')
        })
    })

    it("should fetch details for a auther have two books ", function(){
      cy.request("GET", "books?author=Author5").as("book")
      cy.get("@book").should((response) => {
        // Verify status code
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(2)
        expect(response.body[0].author).to.eq('Author5')
        expect(response.body[1].author).to.eq('Author5')
      })
  })
})
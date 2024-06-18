describe("API Tests: Get all books", function(){
  it("should fetch all books ", function(){
      cy.request("GET", "books").as("books")
      cy.get("@books").should((response) => {
        // Verify status code
        expect(response.status).to.eq(200)

        // Verify books array length
        expect(response.body).to.have.length(6)

        // Verify response body property name
        expect(response.body[0]).to.have.property('id')
        expect(response.body[0]).to.have.property('title')
        expect(response.body[0]).to.have.property('author')
        expect(response.body[0]).to.have.property('isbn')
        expect(response.body[0]).to.have.property('price')
      })
  })
})
describe("API Tests: Get specific book detail", function(){
  it("should fetch details for a specific book ", function(){
      cy.request("GET", "books/1").as("book")
      cy.get("@book").should((response) => {
        // Verify status code
        expect(response.status).to.eq(200)

        // Verify response body property name
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('title')
        expect(response.body).to.have.property('author')
        expect(response.body).to.have.property('isbn')
        expect(response.body).to.have.property('price')

        // Verify response body property value
        expect(response.body.id).to.eq('1')
        expect(response.body.title).to.eq('Book1')
        expect(response.body.author).to.eq('Author1')
        expect(response.body.isbn).to.eq('978-3-16-148410-1')
        expect(response.body.price).to.eq(11)
      })
  })
})
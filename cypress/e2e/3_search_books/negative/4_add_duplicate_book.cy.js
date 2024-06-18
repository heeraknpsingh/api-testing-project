describe("API Tests: Try to add an existing book ", function(){
  beforeEach(function () {
    cy.fixture('books/data.json').then((data) => {
      this.payload = data["add_duplicate_book"]
    })
  })

  it("should show 404 ", function(){
    cy.request({method: "POST", url: "books", failOnStatusCode: false, body: this.payload}).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.eq("adding duplicate book with id 1")
    })
  })
})
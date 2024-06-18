describe("API Tests: Try to update a non existing book ", function(){
  beforeEach(function () {
    cy.fixture('books/data.json').then((data) => {
      this.payload = data["update_book"]
    })
  })

  it("should show 404 ", function(){
    cy.request({method: "PUT", url: "books/100", failOnStatusCode: false, body: this.payload}).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.eq("id does not exist 100")
    })
  })
})
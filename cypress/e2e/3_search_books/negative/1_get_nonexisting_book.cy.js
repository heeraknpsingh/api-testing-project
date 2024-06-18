describe("API Tests: Try to get a non existing book", function(){
  it("should show 404 ", function(){
      cy.request({url: "books/100", failOnStatusCode: false}).then((response) => {
        expect(response.status).to.eq(404)
        expect(response.body).to.eq("id does not exist 100")
      })
  })
})
describe("API Tests: Register user invalid body ", function(){
  beforeEach(function () {
    cy.fixture('users/data.json').then((data) => {
      this.payload = data["register_invalid_user"]
    })
  })

  it("should show 400 error for invalid body data ", function(){
    cy.request({method: "POST", url: "users/register", failOnStatusCode: false, body: this.payload}).as("user")
    cy.get("@user").should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.eq("Email and password are required")
    })
  })
})
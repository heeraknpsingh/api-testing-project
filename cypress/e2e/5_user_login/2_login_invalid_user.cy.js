describe("API Tests: Invalid User login ", function(){
  it("should not be able to login with invalid user email ", function(){
    cy.fixture('users/data.json').then((data) => {
      cy.request("GET", "users").as("users")
      cy.get("@users").should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(1)
      })
      cy.request({method: "POST", url: "login", failOnStatusCode: false, body: data["login_invalid_email"]}).as("user")
      cy.get("@user").should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body).to.eq("Cannot find user")
      })
    })
  })

  it("should not be able to login with invalid user password ", function(){
    cy.fixture('users/data.json').then((data) => {
      cy.request("GET", "users").as("users")
      cy.get("@users").should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(1)
      })
      cy.request({method: "POST", url: "login", failOnStatusCode: false, body: data["login_invalid_password"]}).as("user")
      cy.get("@user").should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body).to.eq("Incorrect password")
      })
    })
  })

  it("should not be able to login with invalid body ", function(){
    cy.fixture('users/data.json').then((data) => {
      cy.request("GET", "users").as("users")
      cy.get("@users").should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(1)
      })
      cy.request({method: "POST", url: "login", failOnStatusCode: false, body: data["login_invalid_body"]}).as("user")
      cy.get("@user").should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body).to.eq("Email and password are required")
      })
    })
  })
})
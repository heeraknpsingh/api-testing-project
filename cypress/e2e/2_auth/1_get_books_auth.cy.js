describe("API Tests: Get books when valid auth details passed", function(){
  before(function() {
    cy.fixture('headers/data.json').then((data) => {
      this.data = data["valid_header"]
    })  
  })
  it("get the books ", function(){
      cy.request({method: "GET", url: "books", auth: {username: this.data.username, password: this.data.password}}).as("books")
      cy.get("@books").should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(6)
      })
  })
})

describe("API Tests: Get books when invalid auth details passed", function(){
  before(function() {
    cy.fixture('headers/data.json').then((data) => {
      this.data = data["invalid_header"]
    })  
  })
  it("unauthrized ", function(){
      cy.request({method: "GET", url: "books", auth: {username: this.data.username, password: this.data.password}, failOnStatusCode: false}).as("books")
      cy.get("@books").should((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.error).to.eq("unauthorized")
      })
  })
})

describe("API Tests: Get books when no auth details passed", function(){
  before(function() {
    cy.fixture('headers/data.json').then((data) => {
      this.data = data["empty_header"]
    })  
  })
  it("unauthrized ", function(){
      cy.request({method: "GET", url: "books", auth: {username: this.data.username, password: this.data.password}, failOnStatusCode: false}).as("books")
      cy.get("@books").should((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.error).to.eq("unauthorized")
      })
  })
})
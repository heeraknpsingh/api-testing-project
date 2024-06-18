describe("API Tests: Valid User login ", function(){
  beforeEach(function () {
    cy.fixture('users/data.json').then((data) => {
      this.payload = data["login_valid_user"]
    })
  })

  it("should be able to login with valid user ", function(){
    cy.request("GET", "users").as("users")
    cy.get("@users").should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(1)
    })
    cy.request("POST", "login", this.payload).as("user")
    cy.get("@user").should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('accessToken')
      expect(response.body).to.have.property('user')
      expect(response.body.user).to.have.property('email')
      expect(response.body.user).to.have.property('username')
      expect(response.body.user).to.have.property('id')
      expect(response.body.user).to.have.property('firstname')
      expect(response.body.user).to.have.property('lastname')
      expect(response.body.user).to.have.property('age')

      expect(response.body.user.email).to.eq("heera@gmail.com")
      expect(response.body.user.username).to.eq("heera")
      expect(response.body.user.id).to.eq(1)
      expect(response.body.user.firstname).to.eq("Heera")
      expect(response.body.user.lastname).to.eq("Singh")
      expect(response.body.user.age).to.eq(38)
      expect(response.body.accessToken).to.have.lengthOf.above(30)
    })
  })
})
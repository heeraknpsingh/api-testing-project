describe("API Tests: Add new book ", function(){
  beforeEach(function () {
    cy.fixture('books/data.json').then((data) => {
      this.payload = data["add_book"]
    })
  })

  it("should add new book ", function(){
      cy.request("POST", "books", this.payload).as("newbook")
      cy.get("@newbook").should((response) => {
        // Verify status code
        expect(response.status).to.eq(201)

        // Verify response body property name
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('title')
        expect(response.body).to.have.property('author')
        expect(response.body).to.have.property('isbn')
        expect(response.body).to.have.property('price')

        // Verify response body property value
        expect(response.body.id).to.eq(this.payload.id)
        expect(response.body.title).to.eq(this.payload.title)
        expect(response.body.author).to.eq(this.payload.author)
        expect(response.body.isbn).to.eq(this.payload.isbn)
        expect(response.body.price).to.eq(this.payload.price)
      })

      cy.request("GET", "books").as("books")
      cy.get("@books").should((response) => {
        // Verify status code
        expect(response.status).to.eq(200)

        // Verify books array length
        expect(response.body).to.have.length(7)

        // Verify response body property name
        expect(response.body[6]).to.have.property('id')
        expect(response.body[6]).to.have.property('title')
        expect(response.body[6]).to.have.property('author')
        expect(response.body[6]).to.have.property('isbn')
        expect(response.body[6]).to.have.property('price')

        // Verify response body property value
        expect(response.body[6].id).to.eq(this.payload.id)
        expect(response.body[6].title).to.eq(this.payload.title)
        expect(response.body[6].author).to.eq(this.payload.author)
        expect(response.body[6].isbn).to.eq(this.payload.isbn)
        expect(response.body[6].price).to.eq(this.payload.price)
      })
  })
})
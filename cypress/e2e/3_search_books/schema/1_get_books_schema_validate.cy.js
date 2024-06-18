import books from "./books.json"

import Ajv from "ajv"
const ajv = new Ajv({allErrors: true})

describe("API Tests: Validate users response schema", function(){
    it("validate response schema againest created schema ", function(){
        cy.request("GET", "books").as("books")
        cy.get("@books").should((response) => {
          expect(response.status).to.eq(200)
          const validate = ajv.compile(books)
          const valid = validate(response.body)
          console.log(valid)
          if (!valid) console.log(validate.errors)
          expect(valid).to.eq(true)
        })
    })
})
describe("API Tests: Verify server health check", function(){
  it("should verify health of json server ", function(){
      cy.request("GET", "/").as("health")
      cy.get("@health").should((response) => {
        // Verify status code
        expect(response.status).to.eq(200)
      })
  })
})
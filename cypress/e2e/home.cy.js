context('Validate home page', () => {
  describe('home page', () => {
    beforeEach(() => {
      // Visit the demo site
    cy.visit('https://www.demoblaze.com/')
  })


    it('the nav title has the correct text', () => {
      // Verify the title for product store
      cy.get("#nava")
        .should("exist")
        .contains('PRODUCT STORE')
    })

    it('the categories have the correct text', () => {
      // When: we check the catagories section
      cy.get('#cat')
        .should("exist")
        .contains("CATEGORIES")

      // Then: We expect Phones, Laptops, Monitors
      cy.get(".list-group-item").eq(1)
        .should("exist")
        .contains("Phones")

        cy.get(".list-group-item").eq(2)
        .should("exist")
        .contains("Laptops")

        cy.get(".list-group-item").eq(3)
        .should("exist")
        .contains("Monitors")
    })

    it('renderds a paragraph under a class', () => {
      cy.get(".caption").eq(0)
      .find("p")
      .should("exist")
    })

    it("renders a section with the correct elements", ()=> {
      cy.get(".caption").eq(1).within(() => {
        cy.get("h4")
        .should("exist")
        .contains("Get in Touch")
      })
    })
  })
})
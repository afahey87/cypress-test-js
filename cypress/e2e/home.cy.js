describe('home page', () => {
  it('the nav title has the correct text', () => {
    // Visit the demo site
    cy.visit('https://www.demoblaze.com/')

    // Verify the title for product store
    cy.get("#nava")
      .should("exist")
      .contains('PRODUCT STORE')
  })

  it('the categories have the correct text', () => {

    // Given: we visit the demo site
    cy.visit('https://www.demoblaze.com/')

    // When: we check the catagories section
    cy.get('#cat')
      .should("exist")
      .contains("CATEGORIES")

    // Then: We expect Phones, Laptops, Monitors
    // cy.get(".list-group-item")
    //   .should("exist")
    //   .contains("Phones")
    myFunction("Phones")

    //   cy.get(".list-group-item")
    //   .should("exist")
    //   .contains("Laptops")
    myFunction("Laptops")

    //   cy.get(".list-group-item")
    //   .should("exist")
    //   .contains("Monitors")
    myFunction("Monitors")
  })

  function myFunction(cat) {
    cy.get(".list-group-item")
    .should("exist")
    .contains(cat)
    return
  }
})
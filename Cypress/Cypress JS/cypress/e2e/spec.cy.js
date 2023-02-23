// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// describe('My Second Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
    cy.contains('type').click()

    // Debe haber una nueva URL que incluya '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Obtener un input, escribir en el input
    cy.get('.action-email').type('fake@email.com')

    // Verificar que el valor ha sido actualizado
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

describe('Test ejemplo', () => {
  it('Usando los codigos de la web', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')

    // codigo de type/.blur()
    cy.contains('type').click()
    cy.get('.action-blur').type('About to blur').blur()
      .should('have.class', 'error')
      .prev().should('have.attr', 'style', 'color: red;')
  });
})
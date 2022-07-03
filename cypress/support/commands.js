// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => {
    cy.get('.auth___XAKkF > svg').click(); //нужно поправить этот локатор на test-id
    cy.url().should('contains','https://sciamp-cofxtu6c9-the-core.vercel.app/authorization')
    cy.get('#email').type(`${email}`);
    cy.get('#password').type(`${password}`);
    cy.get('button').contains('Log in').click();
    cy.url().should('contains','https://sciamp-cofxtu6c9-the-core.vercel.app/authorization')
})






    
Cypress.Commands.add('create_request', (hello) => {
    cy.contains(' Select a category ').click()
    cy.contains('“Turnkey” research').click()
    cy.contains(' Close the list ').click()
    cy.get('span').contains(' Categories ').click()
    cy.contains('Participation in competitions and grants').click()
    cy.contains(' Close the list ').click() 
    cy.get('textarea[placeholder = " Enter a title "').type('test_title')
    cy.get('textarea[placeholder = " Type a description "').type('test_description')
    cy.get('input[aria-label="Keywords"]').type('key1')
    cy.contains(' Biology & Genetics ').click()
    cy.get('button[aria-label=" Publish "]').click()
    cy.get('button[aria-label=" Go to requests "]').click()
    cy.url().should('eq', 'https://sciamp-cofxtu6c9-the-core.vercel.app/marketplace')
    cy.log(`${hello}`)
})

Cypress.Commands.add('create_request_unauth', (hello) => {
    cy.contains(' Select a category ').click()
    cy.contains('“Turnkey” research').click()
    cy.contains(' Close the list ').click()
    cy.get('span').contains(' Categories ').click()
    cy.contains('Participation in competitions and grants').click()
    cy.contains(' Close the list ').click() 
    cy.get('textarea[placeholder = " Enter a title "').type('test_title')
    cy.get('textarea[placeholder = " Type a description "').type('test_description')
    cy.get('input[aria-label="Keywords"]').type('key1')
    cy.contains(' Biology & Genetics ').click()
    cy.get('button[aria-label=" Sign up and Publish "]').click()
    cy.url().should('eq', 'https://sciamp-cofxtu6c9-the-core.vercel.app/authorization')
    cy.log(`${hello}`)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

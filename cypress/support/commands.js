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
// Cypress.Commands.add('login', (email, password) => { ... })
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

///<reference types="cypress"/>



Cypress.Commands.add('login',(username,password)=>{

    cy.session([username,password],()=>{

    //visit url
    cy.visit("https://www.saucedemo.com/v1/index.html")

    
    //usename
    cy.get("#user-name").type("standard_user")
    //password
    cy.get("#password").type("secret_sauce")
    //click on login
    cy.get("#login-button").click()

    cy.wait(5000)



    })


    

})

const faker = require('faker');
Cypress.Commands.add('generateRandomEmail', () => {
  return faker.internet.email();
});
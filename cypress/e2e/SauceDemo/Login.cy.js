///<reference types="cypress"/>
describe('Login',()=>{

    it('Login to saucedemo',()=>{
        //type url
        cy.visit("https://www.saucedemo.com/v1/index.html")

        //usename
        cy.get("#user-name").type("standard_user")
        //password
        cy.get("#password").type("secret_sauce")
        //click on login
        cy.get("#login-button").click()



    })
})
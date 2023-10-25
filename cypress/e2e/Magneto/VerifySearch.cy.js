///<reference types="cypress"/>

describe('Verify Search',()=>{

    it('verify search',()=>{

        //visit url 
        cy.visit("https://magento.softwaretestingboard.com/what-is-new.html")
        //verify search 
        cy.get("#search").type("shirts for women,{enter}")
    
       
        
        
    })
})
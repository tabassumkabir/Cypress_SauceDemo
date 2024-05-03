///<reference types="cypress"/>
///<reference types="cypress-xpath"/>


describe('Verify Search',()=>{

    const url="https://magento.softwaretestingboard.com/what-is-new.html"

    it('verify search',()=>{

        //visit url 
        cy.visit(url)
        //verify search 
        cy.get("#search").type("shirts for women,{enter}")
    
       
        
        
    })

    it.only ('Create an account',()=>{

        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
        //visit url 
        cy.visit(url)
        //click on create account
        
        cy.xpath("//div[@class='panel header']//a[normalize-space()='Create an Account']").click()
        cy.wait(3000)
        //First name 
        cy.get("#firstname").type("Test")
        //lastname 
        cy.get("#lastname").type("Demo")
        //email
        cy.get("#email_address").type(randomEmail)
        //pass
        cy.get("#password").type("123QWabc@")
        //confirm pass
        cy.get('#password-confirmation').type("123QWabc@")
        //click on create account
        cy.get("button[title='Create an Account'] span").click()
        cy.wait(3000)
        //assertion 
        cy.contains("Thank you for registering with Main Website Store.")
        

    })
})
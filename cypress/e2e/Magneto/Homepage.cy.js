///<reference types="cypress"/>
///<reference types="cypress-xpath"/>


describe('Verify Search',()=>{
    const url="https://magento.softwaretestingboard.com/what-is-new.html"

      beforeEach('login',()=>{

        cy.login("tabassumkabir123@gmail.com","Gallianfg123@")
      })  

    it('Checkout Journey',()=>{

        //visit url 
        cy.visit(url)
        //verify search 
        cy.get("#search").type("shirts for women , {enter}")
        //click on item 
        cy.get("img[alt='Chloe Compete Tank']").click()
        cy.wait(3000)
        //click on size 
        cy.get('#option-label-size-143-item-166').click()
        //click on color red
        cy.get("#option-label-color-93-item-58").click()
        //add quantity
        cy.get('#qty').type("2")
        cy.wait(3000)
        //click on add to cart 
        cy.get('#product-addtocart-button').click()
        cy.wait(3000)
        //click on cart 
        cy.get('.action.showcart').click()

        cy.wait(4000)
        //click on proceed to checkout 
        cy.get('#top-cart-btn-checkout').click()
        cy.wait(7000)

      
        //company
        cy.get("[name^='company']").type("ddf")
        //address 
        cy.get("[name='street[0]']").type("dddfff")
        //city
        cy.get("[name='city']").type("Mohammadpur, dhaka")
        //postcode 
        cy.get("[name='postcode']").type("1206")
        //state 
        cy.get("[name='region_id']").select("Florida")
        //country 
        cy.get("[name='country_id']").select("Bangladesh")
        
        //phone number
        cy.get("[name='telephone']").type("234325435")
        //shipping method
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        //click next 
        cy.get(".button.action.continue.primary").click({force :true})
        cy.wait(6000)

        

    
       
        
        
    })
    

    
    
})
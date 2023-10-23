describe('Buy product',()=>{

    beforeEach('Login',()=>{

        //type url
        cy.visit("https://www.saucedemo.com/v1/index.html")

        //usename
        cy.get("#user-name").type("standard_user")
        //password
        cy.get("#password").type("secret_sauce")
        //click on login
        cy.get("#login-button").click()

    })

    it('Buy a product',()=>{
        

        cy.wait(5000)
        //click on add to cart 
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        //click on cart 
        cy.get('.fa-layers-counter').click()
        //click on checkout
        cy.get(".btn_action.checkout_button").click()
        //firstname
        cy.get("#first-name").type("Tabbassum")
        //lastname
        cy.get("#last-name").type("Kabir")
        //zip/postal code
        cy.get("#postal-code").type("1207")
        //click on continue
        cy.get("input[value='CONTINUE']").click()
        //click on finish
        cy.get(".btn_action.cart_button").click()
        //confirmation message
        cy.get(".complete-header").should('have.text','THANK YOU FOR YOUR ORDER')

    })

    it('Remove item from cart',()=>{

        //click on description 
        cy.get('#item_4_title_link > .inventory_item_name').click()
        //click on add to cart
        cy.get('.btn_primary.btn_inventory').click( {multiple: true })
        //click on cart 
        cy.get('.fa-layers-counter.shopping_cart_badge').click()
        //click on remove 
        cy.get('.btn_secondary.cart_button').click()
    })
})
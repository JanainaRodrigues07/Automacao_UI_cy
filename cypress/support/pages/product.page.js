/// <reference types="cypress" />  

class ProductPage {
    get menu() { return cy.get('#primary-menu > .menu-item-629 > a')}
    get produto() { return cy.get('[class="product-block grid"]').eq(1)}
    get tamanho() { return cy.get('.button-variable-item-XS')}
    get cor() { return cy.get('.button-variable-item-Blue')}
    get comprar() { return cy.get('.single_add_to_cart_button')}

    addProduct(){
        this.menu.click()
        this.produto.click()
        this.tamanho.click()
        this.cor.click()
        this.comprar.click()
    }

    message(){ return cy.get('[class="woocommerce-message"]')}
};


module.exports = new ProductPage()


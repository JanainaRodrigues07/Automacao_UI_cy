/// <reference types="cypress" />  

class ViewCart {
    get vercarrinho() { return cy.get('.woocommerce-message > .button')}
    get texto() { return cy.get('.quantity > .input-text')}
    get editar() { return cy.get('.quantity > .input-text')}
    get quantidade() { return cy.get('.quantity > .input-text')}
    get atualizar() { return cy.get('.actions > .clearfix > .pull-right')}
    get remover() {return cy.get('.remove > .fa')}

    updateCart(){
        this.vercarrinho.click()
        this.texto.click()
        this.editar.click().clear()
        this.quantidade.type(3)
        this.atualizar.click()
    }

    remove(){
        this.vercarrinho.click() 
        this.remover.click()
    }

    cartMessage(){return cy.get('.woocommerce-message')}
};

module.exports = new ViewCart()



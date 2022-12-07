/// <reference types="cypress" />  

export const myAccount = {
    get minhaConta() { return cy.get(".page-title")},
    get mensagemErro() { return cy.get(".woocommerce-error > li")}
}

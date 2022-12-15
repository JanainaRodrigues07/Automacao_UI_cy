/// <reference types="cypress" />  

const dadosRegistro = require("../fixtures/dadosRegistro.json")
const dadosCheckout = require("../fixtures/dadosCheckout.json")
const {checkout} = require("../support/pages/checkout.page")

describe('Preencher dados da página de checkout', () => {

    context(`Dado que eu faça login com email ${dadosRegistro[1].email} e senha ${dadosRegistro[1].senha}`, () => {
        before(() => {
            cy.login(dadosRegistro[1].email, dadosRegistro[1].senha)
        });

        context('Quando eu adicionar um produto no carrinho', () => {
            beforeEach(() => {
                cy.addProduto('XS', 'Blue')  
            });
            
            context('E preencher os dados da página de checkout', () => {

                    it('Então devo preencher a página de checkout com dados válidos', () => {
                        cy.checkout(
                            dadosCheckout[0].nome,
                            dadosCheckout[0].sobrenome,
                            dadosCheckout[0].empresa,
                            dadosCheckout[0].rua,
                            dadosCheckout[0].cidade,
                            dadosCheckout[0].estado,
                            dadosCheckout[0].cep,
                            dadosCheckout[0].telefone,
                            dadosCheckout[0].email)

                        checkout.mensagemSucesso.should("be.visible")
                    });
            });
        });
    });
});



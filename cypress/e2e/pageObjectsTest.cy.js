/// <reference types="cypress" />  

const RegisterPage = require ("../support/pages/register.page")
const dadosRegistro = require ("../fixtures/dadosRegistro.json")
const {myAccount} = require ("../support/pages/myAccount.page")

describe('Criar conta', () => {
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    it('Criar conta com email e senha válidos', () => {
        RegisterPage.account(dadosRegistro[1].email, dadosRegistro[1].senha)
        myAccount.minhaConta.should("be.visible")
        
    });

    it.only('Criar conta com email já existente', () => {
        RegisterPage.account(dadosRegistro[1].email, dadosRegistro[1].senha)
        myAccount.mensagemErro.should("be.visible")
        
    });
    
});

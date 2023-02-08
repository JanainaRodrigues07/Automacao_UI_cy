/// <reference types="cypress" /> 
const dadosResposta = require('../fixtures/dadosResposta.json')
const ProductPage = require('../support/pages/product.page')
const ViewCart = require('../support/pages/viewCart.page')

describe('Interações com o Carrinho de Compras', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Adicionar item no Carrinho de Compras', () => {
        cy.intercept({
            method: 'POST',
            url: '/product/*',
            query: {
                term: 'abominable-hoodie'
            }
        }, req => {
            req.reply({
                statusCode: 200,
                body: (
                    dadosResposta.responseAddProduct
                )
            })
        })
        ProductPage.addProduct()
        ProductPage.message().should('contain', 'adicionado')
    });

    it('Atualizar item no Carrinho de Compras', () => {
        cy.intercept({
            method: 'POST',
            url: '/carrinho/',
        }, req => {
            req.reply({
                statusCode: 200,
                body: (
                   dadosResposta.responseUpdateCart
                )
            })
        })
        ProductPage.addProduct()
        ViewCart.updateCart()
        ViewCart.cartMessage().should('contain', 'atualizado')
    });

    it('Remover item no Carrinho de Compras', () => {
        cy.intercept({
            method: 'POST',
            url: '/carrinho/*',
            query: {
                term: 'removed_item=1'
            }
        }, req => {
            req.reply({
                statusCode: 200,
                body: (
                    dadosResposta.responseRemove
                )
            })
        })
        ProductPage.addProduct()
        ViewCart.remove()
        ViewCart.cartMessage().should('contain', 'removido')
    });
});
/// <reference types="cypress" />  

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', "98adf4d44a")
    fd.append('_wp_http_referer', `/minha-conta/`)
    fd.append('login', "Login")

    cy.visit('/minha-conta/')

    cy.request({
        url: '/minhaconta/',
        failOnStatusCode: false,
        method: 'POST',
        body: fd
    })
});


Cypress.Commands.add('addProduto', (tamanho, cor) => {
    const fdproduto = new FormData()
    fdproduto.append('attribute_size', tamanho)
    fdproduto.append('attribute_color', cor)
    fdproduto.append('quantity', 1)
    fdproduto.append('add-to-cart', "2559")
    fdproduto.append('product_id', "2559")
    fdproduto.append('variation_id', "2580")

    cy.get('#primary-menu > .menu-item-629 > a').click()

    cy.request({
        url: '/product/abominable-hoodie/',
        method: 'POST',
        body: fdproduto
    })

});


Cypress.Commands.add('checkout', (nome, sobrenome, empresa, rua, cidade, estado, cep, telefone, email) => {
    const fdcheckout = new FormData()
    fdcheckout.append('billing_first_name', nome)
    fdcheckout.append('billing_last_name', sobrenome)
    fdcheckout.append('billing_company', empresa)
    fdcheckout.append('billing_country', "BR")
    fdcheckout.append('billing_address_1', rua)
    fdcheckout.append('billing_city', cidade)
    fdcheckout.append('billing_state', estado)
    fdcheckout.append('billing_postcode', cep)
    fdcheckout.append('billing_phone', telefone)
    fdcheckout.append('billing_email', email)
    fdcheckout.append('payment_method', "bacs")
    fdcheckout.append('terms-field', 1)
    fdcheckout.append('woocommerce-process-checkout-nonce', "da0d9f8699")
    fdcheckout.append('_wp_http_referer', "%2Fcheckout%2F")

    cy.request({
        url: '/checkout/',
        method: 'POST',
        body: fdcheckout
    })

    
});

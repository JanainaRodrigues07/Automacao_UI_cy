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

    // cy.get('.single_add_to_cart_button').click()
});


Cypress.Commands.add('checkout', (nome, sobrenome, empresa, rua, cidade, estado, cep, telefone, email) => {
    const fdcheckout = new FormData()
    // fdcheckout.append('security', "2f0e9ae9e7")
    fdcheckout.append('billing_first_name', nome)
    fdcheckout.append('billing_last_name', sobrenome)
    fdcheckout.append('billing_company', empresa)
    fdcheckout.append('billing_country', "BR")
    fdcheckout.append('billing_address_1', rua)
    // fdcheckout.append('billing_address_2')
    fdcheckout.append('billing_city', cidade)
    fdcheckout.append('billing_state', estado)
    fdcheckout.append('billing_postcode', cep)
    // fdcheckout.append('has_full_address', "true")
    fdcheckout.append('billing_phone', telefone)
    fdcheckout.append('billing_email', email)
    // fdcheckout.append('order_comments')
    fdcheckout.append('payment_method', "bacs")
    fdcheckout.append('terms-field', 1)
    fdcheckout.append('woocommerce-process-checkout-nonce', "da0d9f8699")
    fdcheckout.append('_wp_http_referer', "%2Fcheckout%2F")

    // cy.get('.woocommerce-message > .button').click()
    // cy.get('.checkout-button').click()
    cy.request({
        url: '/checkout/',
        method: 'POST',
        body: fdcheckout
    })

    // cy.get('#terms').click()
    // cy.get('#place_order').click()
});


  //formdata
//     attribute_size: XS
// attribute_color: Green
// quantity: 1
// add-to-cart: 2559
// product_id: 2559
// variation_id: 2581
    
    // cy.get('.button-variable-item-XS').click()
    // cy.get('.button-variable-item-Green').click()
    // cy.get('.single_add_to_cart_button').click()

//     cy.get('#primary-menu > .menu-item-629 > a').click()
//     cy.get('[class="product-block grid"]').contains(produto).click()
//     cy.get('.button-variable-item-'+ tamanho).click()
//     cy.get('.button-variable-item-'+ cor).click()
//     cy.get('.input-text').clear().type(quantidade)
//     cy.get('.single_add_to_cart_button').click()
// });

// //mensagem de confirmacao
// cy.get('.woocommerce-message')

// cy.get('.checkout-button').click()

// Request URL: http://lojaebac.ebaconline.art.br/checkout/order-received/8238/?key=wc_order_hW1nNuGlaNqtN
// Request Method: GET

//checkout
// class CheckoutPage {

//     editarCheckout (nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, telefone, email) {

//         cy.get('.woocommerce-message > .button').click()
//         cy.get('.checkout-button').click()
//         cy.get('#billing_first_name').clear().type(nome)
//         cy.get('#billing_last_name').clear().type(sobrenome)
//         cy.get('#billing_company').clear().type(empresa)
//         cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
//         cy.get('#billing_address_1').clear().type(rua)
//         cy.get('#billing_address_2').clear().type(numero)
//         cy.get('#billing_city').clear().type(cidade)
//         cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
//         cy.get('#billing_postcode').clear().type(cep)
//         cy.get('#billing_phone').clear().type(telefone)
//         cy.get('#billing_email').clear().type(email)
//         cy.get('#payment_method_cod').click()
//         cy.get('#terms').click()**
//         cy.get('#place_order').click()

//     }
// }

// export default new CheckoutPage()


// .then(response =>{
    //     response.headers['set-cookie'].forEach(cookie =>{
    //         const inicio = cookie.split(';')[0]
    //         const divisor = inicio.indexOf('=')
    //         const chave = inicio.substring(0, divisor)
    //         const valor = inicio.substring(divisor+1)
    //         cy.setCookie(chave, valor)
    //     })
    // })

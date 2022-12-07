/// <reference types="cypress" />  

class RegisterPage {
    get #email() { return cy.get("#reg_email")}
    get #pass() { return cy.get("#reg_password")}
    get #reg() { return cy.get(":nth-child(4) > .button")}

    account(email, pass){
        this.#email.type(email)
        this.#pass.type(pass)
        this.#reg.click()
    }
};




module.exports = new RegisterPage()
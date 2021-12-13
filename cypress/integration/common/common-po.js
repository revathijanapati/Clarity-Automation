let locators = {
    "username":":nth-child(3) > .dx-validator > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input",
    "password":"input[type='password']",
    "login":".dx-button.dx-button-default > .dx-button-content",
    "ALMDemo":"AML Demo Study 1"
}

export function loginInApplication(user, pass){
    cy
    .get(locators.username)
    .type(user)  

    cy
    .get(locators.password)
    .type(pass) 

    cy
    .get(locators.login)
    .click()
    cy.wait(3000)

    cy
    .contains(locators.ALMDemo)
    .click()
}

export function visit(applnUrl){
    cy.visit(applnUrl)
}
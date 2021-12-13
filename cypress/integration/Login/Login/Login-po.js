
let locators = {
    "username":":nth-child(3) > .dx-validator > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input",
    "password":"input[type='password']",
    "login":".dx-button.dx-button-default > .dx-button-content",
    "ALMDemo":"AML Demo Study 1"
}


export function enterUserName(user){
    cy.get(locators.username).type(user)  
}

export function enterPassword(pass){
    cy.get(locators.password).type(pass)  
}

export function ClickOnLogin()
{
    cy.get(locators.login).click()
   
    cy.wait(3000)
}

export function ClicKOnALMDemo()
{
    cy.contains(locators.ALMDemo).click()
    cy.screenshot("ALMDemo.png")

}

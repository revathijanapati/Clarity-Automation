/// <reference types="Cypress" />
import {Given, And, Then} from 'cypress-cucumber-preprocessor/steps'
import {enterUserName, enterPassword, ClickOnLogin, ClicKOnALMDemo} from './Login-po'

Given('Launch application',()=>{
    cy.visit('https://devweb01.clarityserver.com/clarity.Web/capp/login-form')
})

And('Enter {string} And {string}',(username,password)=>{
    enterUserName(username)
    enterPassword(password)
}) 

And('Click on login',()=>{
    ClickOnLogin()
    cy
    .wait(3000)
})

Then('Click on ALM Demo User1',()=>{
    ClicKOnALMDemo() 
})
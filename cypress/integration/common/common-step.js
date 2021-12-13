import {Given, And, Then} from 'cypress-cucumber-preprocessor/steps'
import {loginInApplication, visit} from './common-po'

Given('Login into application',()=>{
    visit('https://devweb01.clarityserver.com/clarity.Web/capp/login-form')
    loginInApplication('ClarityUser','SystemPassword')
})
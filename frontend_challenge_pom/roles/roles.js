import LoginPage from '../pages/LoginPage'
import { Role } from 'testcafe';
import { CREDENTIALS } from '../data/Constants'
import { URLS } from '../data/Constants'

export const validUser = Role(`${URLS.LOGIN_PAGE}`, async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME, {paste:true} )
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD,  {paste:true} )
        .click(LoginPage.loginButton)
}, { preserveUrl: true });

export const invalidUser = Role(`${URLS.LOGIN_PAGE}`, async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.INVALID_USER.USERNAME, {paste:true} )
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD,  {paste:true} )
        .click(LoginPage.loginButton)
}, { preserveUrl: true });
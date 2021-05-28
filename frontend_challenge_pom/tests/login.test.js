import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'
import { validUser, invalidUser } from '../roles/roles'
import { URLS } from '../data/Constants'

fixture('Login feature test')
    .page(`${URLS.LOGIN_PAGE}`) 

test('1. User is able to login with valid credentials', async t=> {

    await t.useRole(validUser)
    await t.expect(ProductsPage.pageTitle.innerText).eql("PRODUCTS")
        
})

test ('2. Error message is displayed when user tries to log in with invalid credentials', async t=> {
    await LoginPage.login(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(LoginPage.loginErrorMessage.exists).ok
    await t.expect(LoginPage.loginErrorMessage.innerText).eql("Epic sadface: Username and password do not match any user in this service")
})
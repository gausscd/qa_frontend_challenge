import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { URLS } from '../data/Constants'
import { validUser } from '../roles/roles'

fixture('Products Page feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test('3. User is able to logout from Products page', async t=> {
    await t
        .useRole(validUser)
        .click(ProductsPage.menuButton)
        .click(ProductsPage.logoutButton)
       
     await t.expect(LoginPage.loginButton.value).eql("Login")
        
})

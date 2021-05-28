import CheckoutInformationPage from '../pages/CheckoutInformationPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingcartPage from '../pages/ShoppingcartPage'
import { URLS } from '../data/Constants'
import { CREDENTIALS, INFORMATION } from '../data/Constants'
import { validUser } from '../roles/roles'

fixture('Checkout Overview feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t=>{
  
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
        .click(ProductsPage.sauceBackpackButton)
        .click(ProductsPage.sauceBikelightButton)
        .click(ProductsPage.shoppingCartLink)
        .click(ShoppingcartPage.checkoutButton)
    await CheckoutInformationPage.enterInfoClickContinue(INFORMATION.FIRST_NAME,INFORMATION.LAST_NAME, INFORMATION.ZIP_CODE)
    })

test('9. Verify items in Overview page match the added items', async t=> {
    
        await t.expect(CheckoutOverviewPage.pageTitleCheckoutOverviewPage.innerText).eql("CHECKOUT: OVERVIEW")
        await t.expect(ShoppingcartPage.sauceBackpackCartLink.exists).ok()
        await t.expect(ShoppingcartPage.sauceBackpackCartLink.innerText).eql("Sauce Labs Backpack")
        await t.expect(ShoppingcartPage.sauceBikelightCartLink.exists).ok()
        await t.expect(ShoppingcartPage.sauceBikelightCartLink.innerText).eql("Sauce Labs Bike Light")
})
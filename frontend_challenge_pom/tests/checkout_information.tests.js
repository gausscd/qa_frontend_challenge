import CheckoutInformationPage from '../pages/CheckoutInformationPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingcartPage from '../pages/ShoppingcartPage'
import { URLS, INFORMATION, CREDENTIALS } from '../data/Constants'
import { validUser } from '../roles/roles'
import LoginPage from '../pages/LoginPage'

fixture('Checkout Information Page feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t=>{
        await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t
            .click(ProductsPage.sauceBackpackButton)
            .click(ProductsPage.sauceBikelightButton)
            .click(ProductsPage.shoppingCartLink)
        await t.click(ShoppingcartPage.checkoutButton)
    })

test('7. User gets error message when clicking "Continue" without filling zip code info  in "Your Information" Page', async t=> {
        await CheckoutInformationPage.enterInfoClickContinue(INFORMATION.FIRST_NAME,INFORMATION.LAST_NAME, null)

        await t.expect(CheckoutInformationPage.zipCodeErrorMessage.exists).ok()
        await t.expect(CheckoutInformationPage.zipCodeErrorMessage.innerText).eql("Error: Postal Code is required")


})

test('8. User is able to navigate into Overview Page after filling his information in "Your Information" Page', async t=> {
        await CheckoutInformationPage.enterInfoClickContinue(INFORMATION.FIRST_NAME,INFORMATION.LAST_NAME, INFORMATION.ZIP_CODE)
        
        await t.expect(CheckoutOverviewPage.pageTitleCheckoutOverviewPage.innerText).eql("CHECKOUT: OVERVIEW")

})
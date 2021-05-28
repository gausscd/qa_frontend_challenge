import ProductsPage from '../pages/ProductsPage'
import ShoppingcartPage from '../pages/ShoppingcartPage'
import { URLS } from '../data/Constants'
import { validUser } from '../roles/roles'

fixture('Shopping Cart feature test')
    .page(`${URLS.LOGIN_PAGE}`)

test('4. User is able to navigate to the shopping cart page', async t=> {
    await t
        .useRole(validUser)
        .click(ProductsPage.shoppingCartLink)
        
        await t.expect(ShoppingcartPage.pageTitle.exists).ok()
        await t.expect(ShoppingcartPage.pageTitle.innerText).eql("YOUR CART")
        
})

test('5. User is able to add a single item to the shopping cart', async t=> {
    await t
        .useRole(validUser)
        .click(ProductsPage.sauceBackpackButton)
        .click(ProductsPage.shoppingCartLink)
        
        await t.expect(ShoppingcartPage.sauceBackpackCartLink.exists).ok()
        await t.expect(ShoppingcartPage.sauceBackpackCartLink.innerText).eql("Sauce Labs Backpack")
})


test('6. User is able to add multiple items to the shopping cart', async t=> {
    await t
        .useRole(validUser)
        .click(ProductsPage.sauceBackpackButton)
        .click(ProductsPage.sauceBikelightButton)
        .click(ProductsPage.shoppingCartLink)
        
        await t.expect(ShoppingcartPage.sauceBackpackCartLink.exists).ok()
        await t.expect(ShoppingcartPage.sauceBackpackCartLink.innerText).eql("Sauce Labs Backpack")
        await t.expect(ShoppingcartPage.sauceBikelightCartLink.exists).ok()
        await t.expect(ShoppingcartPage.sauceBikelightCartLink.innerText).eql("Sauce Labs Bike Light")
})




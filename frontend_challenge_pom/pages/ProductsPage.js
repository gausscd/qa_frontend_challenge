import { Selector } from 'testcafe'

class ProductsPage {
    constructor() {
        this.pageTitle = Selector ('span[class="title"]')
        this.menuButton = Selector ('button[id= "react-burger-menu-btn"]')
        this.logoutButton = Selector ('a[id= "logout_sidebar_link"]')
        this.shoppingCartLink = Selector ('a[class= "shopping_cart_link"] ')
        this.sauceBackpackButton = Selector ('button[id="add-to-cart-sauce-labs-backpack"] ')
        this.sauceBikelightButton = Selector ('button[id="add-to-cart-sauce-labs-bike-light"] ')
    }

    async addProductsClickCart(){
        await t
        .click(this.sauceBackpackButton)
        .click(this.sauceBikelightButton)
        .click(this.shoppingCartLink)
    }
}

export default new ProductsPage ()
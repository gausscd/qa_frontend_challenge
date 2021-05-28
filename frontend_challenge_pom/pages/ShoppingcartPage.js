import { Selector } from 'testcafe'

class ShoppingcartPage {
    constructor() {
        this.pageTitle = Selector ('span[class="title"] ')
        this.checkoutButton = Selector ('button[id="checkout"] ')
        this.sauceBackpackCartLink = Selector('div[class="inventory_item_name"]').withText("Sauce Labs Backpack")
        this.sauceBikelightCartLink = Selector('div[class="inventory_item_name"]').withText("Sauce Labs Bike Light")
    }
}

export default new ShoppingcartPage ()
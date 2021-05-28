import { Selector } from 'testcafe'

class CheckoutOverviewPage {
    constructor() {
        this.pageTitleCheckoutOverviewPage = Selector('span[class="title"]')   
        this.sauceBackpackCartLink = Selector('div[class="inventory_item_name"]').withText("Sauce Labs Backpack")
        this.sauceBikelightCartLink = Selector('div[class="inventory_item_name"]').withText("Sauce Labs Bike Light")
    }
}

export default new CheckoutOverviewPage ()
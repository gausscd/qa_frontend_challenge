import { Selector, t } from 'testcafe'

class CheckoutInformationPage {
    constructor() {
        this.pageTitleCheckoutInformationPage = Selector ('span[class="title"]').withText("Checkout: Your Information") 
        this.zipCodeErrorMessage = Selector ('h3[data-test="error"]')
        this.ContinueButton = Selector ('input[id="continue"] ')
        this.firstNameField = Selector('input[id="first-name"]')
        this.lastNameField = Selector('input[id="last-name"]')
        this.zipCodeField = Selector('input[id="postal-code"]')
    }

    async enterInfoClickContinue (firstname, lastname, zipcode){
       await t
            .typeText(this.firstNameField, firstname,  {paste:true})
            .typeText(this.lastNameField, lastname,  {paste:true})
        if (zipcode != null){
        await t
                .typeText(this.zipCodeField, zipcode,  {paste:true})
                .click(this.ContinueButton)
        }   else {
            await t.click(this.ContinueButton)
        }
    }

}

export default new CheckoutInformationPage ()
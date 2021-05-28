import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.usernameField = Selector ('input[id="user-name"]')
        this.passwordField = Selector ('input[id="password"]')
        this.loginButton = Selector ('input[id="login-button"]')
        this.loginErrorMessage = Selector ('h3[data-test= "error"]')
    }

    async login (username, password){
        await t
        .typeText(this.usernameField,username, {paste:true} )
        .typeText(this.passwordField, password,  {paste:true} )
        .click(this.loginButton)
    }

}

export default new LoginPage ()
import { Page, Locator } from 'playwright'

export class LoginPage {

readonly page: Page;
  UserName: Locator;
  Password: Locator;
  LoginButton: Locator;

    constructor( page: Page) {
        this.page = page
        this.UserName = this.page.locator('#user-name');
        this.Password = this.page.locator('#password');
        this.LoginButton = this.page.locator('#login-button');
    }

    async navigateToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username: string) {
        await this.UserName.fill(username);
    }

    async enterPassword(password: string) {
        await this.Password.fill(password);

    }

    async clickLoginButton() {
        await this.LoginButton.click();
    }
}
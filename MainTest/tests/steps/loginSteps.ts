import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/loginPage";
import { CustomWorld } from "../../support/world";

Given("user is on the login page", async function (this: CustomWorld) {
  await this.lognPage.navigateToLoginPage();
});

When(
  "user enters valid {string} and {string}",
  async function (this: CustomWorld, username: string, password: string) {
    await this.lognPage.enterUsername(username);
    await this.lognPage.enterPassword(password);
    await this.lognPage.clickLoginButton();
  }
);

Then(
  "user should be redirecte to the dashboard",
  async function (this: CustomWorld) {
    const expectedUrl = "https://www.saucedemo.com/inventory.html";
    const actualUrl = this.page.url();
    if (actualUrl !== expectedUrl) {
      throw new Error(
        `Expected to be on ${expectedUrl} but was on ${actualUrl}`
      );
    }
  }
);

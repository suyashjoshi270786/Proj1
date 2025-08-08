import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { NewUserSignUpPage } from "../pages/newUserSignUp.page";
import { CustomWorld } from "../../support/world";
import * as fs from "fs";

Given("I am on the Signup Login page", async function (this: CustomWorld) {
  await this.newUserSignUpPage.navigateToSignupPage();
  expect(await this.newUserSignUpPage.page.title()).toContain("Signup");
});

When("I enter name as {string}", async function (name) {
  await this.newUserSignUpPage.enterName(name);
});

When(
  "I enter email address as a unique email",
  async function (this: CustomWorld) {
    await this.newUserSignUpPage.enterEmail();
  }
);

When("I click on the Signup button", async function (this: CustomWorld) {
  await this.newUserSignUpPage.clickSignupButton();
});

Then(
  "I should be redirected to the account information page",
  async function (this: CustomWorld) {
    const message = await this.newUserSignUpPage.getAccountInformationMessage();
    expect(message).toContain("Enter Account Information");
  }
);

Then(
  "I should personal details in the form",
  async function (this: CustomWorld) {
    await this.newUserSignUpPage.clickRadiotitle();
    await this.newUserSignUpPage.enterPassword();
    await this.newUserSignUpPage.selectDateOfBirth();
    await this.newUserSignUpPage.enterPersonalDetails();
  }
);

Then(
  "I should click on Create Account button",
  async function (this: CustomWorld) {
    await this.newUserSignUpPage.clickCreateAccountButton();
  }
);

Then(
  "I should see the account information message",
  async function (this: CustomWorld) {
    const message2 =
      await this.newUserSignUpPage.getAccountInformationMessageText();
    expect(message2).toContain("Account Created!");
  }
);

Then("I click on Continue button", async function (this: CustomWorld) {
  await this.newUserSignUpPage.continueButton.click();
});

Given("user is on home page", async function (this: CustomWorld) {
  await this.newUserSignUpPage.navigateToSignupPage();
  expect(await this.newUserSignUpPage.page.title()).toContain(
    "Automation Exercise"
  );
});

Then(
  "user validates all anchor link text in header",
  async function (this: CustomWorld) {
    await this.newUserSignUpPage.anchorLinkTextValidation();
  }
);

When(
  "I enter email address as an existing email from the test data",
  async function (this: CustomWorld) {
    const rawData = fs.readFileSync(
      "MainTest/test-data/userCredentials.json",
      "utf-8"
    );
    const credentials = JSON.parse(rawData);
    await this.newUserSignUpPage.enterExistingEmail(credentials.email);
    console.log("Entered existing email:", credentials.email);
  }
);

Then(
  "I should see an error message indicating that the email already exists",
  async function (this: CustomWorld) {
    await this.newUserSignUpPage.getSignUpErrorMessage();
  }
);

import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { NewUserSignUpPage } from "../pages/newUserSignUp.page";
import * as fs from "fs";

Given("I am on the Signup Login page", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.navigateToSignupPage();
  expect(await newUserSignUpPage.page.title()).toContain("Signup");
});

When("I enter name as {string}", async function (name) {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.enterName(name);
});

When("I enter email address as a unique email", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.enterEmail();
});

When("I click on the Signup button", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.clickSignupButton();
});

Then(
  "I should be redirected to the account information page",
  async function () {
    const newUserSignUpPage = new NewUserSignUpPage(this.page);
    const message = await newUserSignUpPage.getAccountInformationMessage();
    expect(message).toContain("Enter Account Information");
  }
);

Then("I should personal details in the form", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.clickRadiotitle();
  await newUserSignUpPage.enterPassword();
  await newUserSignUpPage.selectDateOfBirth();
  await newUserSignUpPage.enterPersonalDetails();
});

Then("I should click on Create Account button", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.clickCreateAccountButton();
});

Then("I should see the account information message", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  const message2 = await newUserSignUpPage.getAccountInformationMessageText();
  expect(message2).toContain("Account Created!");
});

Then("I click on Continue button", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.continueButton.click();
});

Given("user is on home page", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.navigateToSignupPage();
  expect(await newUserSignUpPage.page.title()).toContain("Automation Exercise");
});

Then("user validates all anchor link text in header", async function () {
  const newUserSignUpPage = new NewUserSignUpPage(this.page);
  await newUserSignUpPage.anchorLinkTextValidation();
});

When(
  "I enter email address as an existing email from the test data",
  async function () {
    const newUserSignUpPage = new NewUserSignUpPage(this.page);
    const rawData = fs.readFileSync(
      "MainTest/test-data/userCredentials.json",
      "utf-8"
    );
    const credentials = JSON.parse(rawData);
    await newUserSignUpPage.enterExistingEmail(credentials.email);
    console.log("Entered existing email:", credentials.email);
  }
);

Then(
  "I should see an error message indicating that the email already exists",
  async function () {
    const newUserSignUpPage = new NewUserSignUpPage(this.page);
    await newUserSignUpPage.getSignUpErrorMessage();
  }
);

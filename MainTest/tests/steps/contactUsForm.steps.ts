import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { CustomWorld } from "../../support/world";
import { ContactUsFormPage } from "../pages/contactUs.page";

Given("user is on the Contact Us form", async function (this: CustomWorld) {
  
  await this.contactUsformPage.navigateToContactUsform();
});

When("user enters name as {string}", async function (string) {
  
  await this.contactUsformPage.enterName(string);
});

When("user enters email as {string}", async function (string) {
  
  await this.contactUsformPage.enterEmail(string);
});

When("user enters subject as {string}", async function (string) {
  
  await this.contactUsformPage.enterSubject(string);
});

When("user enters message as {string}", async function (string) {
  
  await this.contactUsformPage.enterMessage(string);
});

When("user clicks on Choose File button and upload file", async function (this: CustomWorld) {
  
  await this.contactUsformPage.uploadFile();
  console.log("file uploaded successfully");
});

When("user clicks on Submit button", async function (this: CustomWorld) {
  
  await this.contactUsformPage.clickSubmitButton();
});

Then("a success message {string} should be displayed", async function (string) {
  
  await this.contactUsformPage.veryfySuccessMessage(string);
});

Then(
  "user clicks on Submit button and selects Cancel on dialog",
  async function (this: CustomWorld) {
    
    await this.contactUsformPage.clickSubmitButtonAndCancelDialog();
  }
);

Then("email field should show required error", async function (this: CustomWorld) {
  
  const result = await this.contactUsformPage.isFieldRequiredErrorVisible(
    "input[data-qa='email']"
  );
  expect(result).toBe(true);
});

Then("email field show error message for invalid email", async function (this: CustomWorld) {
  
  const result = await this.contactUsformPage.isEnteredEmailValid(
    "input[data-qa='email']"
  );
  expect(result).toBe(true);
});

import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { CustomWorld } from "../../support/world";
import { ContactUsFormPage } from "../pages/contactUs.page";

Given("user is on the Contact Us form", async function () {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.navigateToContactUsform();
});

When("user enters name as {string}", async function (string) {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.enterName(string);
});

When("user enters email as {string}", async function (string) {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.enterEmail(string);
});

When("user enters subject as {string}", async function (string) {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.enterSubject(string);
});

When("user enters message as {string}", async function (string) {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.enterMessage(string);
});

When("user clicks on Choose File button and upload file", async function () {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.uploadFile();
  console.log("file uploaded successfully");
});

When("user clicks on Submit button", async function () {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.clickSubmitButton();
});

Then("a success message {string} should be displayed", async function (string) {
  const contactUsformPage = new ContactUsFormPage(this.page);
  await contactUsformPage.veryfySuccessMessage(string);
});

Then(
  "user clicks on Submit button and selects Cancel on dialog",
  async function () {
    const contactUsformPage = new ContactUsFormPage(this.page);
    await contactUsformPage.clickSubmitButtonAndCancelDialog();
  }
);

Then("email field should show required error", async function () {
  const contactUsformPage = new ContactUsFormPage(this.page);
  const result = await contactUsformPage.isFieldRequiredErrorVisible(
    "input[data-qa='email']"
  );
  expect(result).toBe(true);
});

Then("email field show error message for invalid email", async function () {
  const contactUsformPage = new ContactUsFormPage(this.page);
  const result = await contactUsformPage.isEnteredEmailValid(
    "input[data-qa='email']"
  );
  expect(result).toBe(true);
});

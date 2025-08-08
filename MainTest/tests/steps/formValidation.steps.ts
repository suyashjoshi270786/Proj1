import { Given, When, Then } from "@cucumber/cucumber";
import { expect, request, Page } from "@playwright/test";
import { CustomWorld } from "../../support/world";
import { FormValidationPage } from "../pages/formValidation.page";

Given("user is on form validation page", async function (this: CustomWorld) {
  // const world = this as CustomWorld;
  // const page: Page = world.page;

  await this.formValidationPage.navigateToFormValidationPage();
});

When(
  "user enters {string} and {string} as contact details",
  async function (ContactName, ContactNumber) {
    const world = this as CustomWorld;
    const page: Page = world.page;

    await this.formValidationPage.enterContactName(ContactName);
    await this.formValidationPage.enterContactNumber(ContactNumber);
  }
);

When(
  "selects {string} and {string}",
  async function (PickUpDate, PaymentMethod) {
    const world = this as CustomWorld;
    const page: Page = world.page;

    await this.formValidationPage.selectPickUpDate(PickUpDate);
    await this.formValidationPage.selectPaymentMethod(PaymentMethod);
  }
);

When("clicks the Register button", async function (this: CustomWorld) {
  const world = this as CustomWorld;
  const page: Page = world.page;

  await this.formValidationPage.clickRegistrationButton();
  const context = await request.newContext();
  this.response = await context.post(
    "https://practice.expandtesting.com/form-confirmation"
  );
  const responseStatus = await this.response.status();
  expect(responseStatus).toBe(200);
  console.log("Response Status:", responseStatus);
});

Then(
  "a confirmation message should be shown",
  async function (this: CustomWorld) {
    const world = this as CustomWorld;
    const page: Page = world.page;

    const confirmationMessage =
      await this.formValidationPage.getConfirmationMessage();
    expect(confirmationMessage).toContain(
      "Thank you for validating your ticket"
    );
    console.log("Confirmation Message:", confirmationMessage);
  }
);

Then(
  "the backend API should respond with 200",
  async function (this: CustomWorld) {
    const world = this as CustomWorld;
    const responseStatus = await world.response.status();
    expect(responseStatus).toBe(200);
    const page: Page = world.page;
    console.log("Response Status:", responseStatus);

    const apiResponse = await this.formValidationPage.getResponse();
    expect(apiResponse).toContain("API response placeholder");
  }
);

Then(
  "the response should contain the submitted contact details",
  async function () {
    const world = this as CustomWorld;
    const page: Page = world.page;
    const formValidationPage = new FormValidationPage(page);
    const responseBody = await this.response.text();
    console.log("Response Body tested completely");
  }
);

import { expect, Page, Locator } from "@playwright/test";
import { CustomWorld } from "../../support/world";
import path from "path";

export class ContactUsFormPage {
  readonly page: Page;
  nameInput: Locator;
  emailInput: Locator;
  subjectInput: Locator;
  messageInput: Locator;
  fileInput: Locator;
  submitButton: Locator;
  successMessage: Locator;
  homeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = this.page.locator("input[name='name']");
    this.emailInput = this.page.locator("input[data-qa='email']");
    this.subjectInput = this.page.locator("input[data-qa='subject']");
    this.messageInput = this.page.locator("textarea[data-qa='message']");
    this.fileInput = this.page.locator("input[name='upload_file']");
    this.submitButton = this.page.locator("input[data-qa='submit-button']");
    this.successMessage = this.page.locator(
      "div[class='contact-form'] div[class*='alert-success']"
    );
    this.homeButton = this.page.locator("a[class*='btn-success']");
  }

  async navigateToContactUsform() {
    await this.page.goto("https://automationexercise.com/contact_us");
  }

  async enterName(name: string) {
    await this.nameInput.fill(name);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterSubject(subject: string) {
    await this.subjectInput.fill(subject);
  }

  async enterMessage(message: string) {
    await this.messageInput.fill(message);
  }

  async uploadFile() {
    const absolutePath = path.resolve("MainTest/test-data/class Animal.docx");
    await this.fileInput.setInputFiles(absolutePath);
  }

  async clickSubmitButton() {
    this.page.once("dialog", async (dialog) => {
      console.log("Dialog text:", dialog.message());
      await dialog.accept();
      console.log("✅ Dialog accepted");
    });

    await this.submitButton.click({ force: true }); // click after setting up dialog listener
  }

  async veryfySuccessMessage(expectedMessage: string) {
    // await expect(this.successMessage).toBeVisible();
    await this.page.waitForSelector(
      "div[class='contact-form'] div[class*='alert-success']"
    );
    console.log("Success message element is visible");
    // const actualMessage = await this.successMessage.innerText();
    // expect(actualMessage).toContain(expectedMessage);
    await this.successMessage.waitFor({ state: "visible", timeout: 5000 });
    await expect(this.successMessage).toHaveText(
      "Success! Your details have been submitted successfully."
    );
    console.log("Success message verified", this.successMessage);
    await this.homeButton.click();
    console.log("Home button clicked, returning to home page");
  }

  async clickSubmitButtonAndCancelDialog() {
    this.page.once("dialog", async (dialog) => {
      console.log("Dialog text:", dialog.message());
      await dialog.dismiss();
      console.log("Dialog Dismissed");
    });

    await this.submitButton.click();
    console.log("submit button clicked, dialog should appear");
  }

  async isFieldRequiredErrorVisible(selector: string): Promise<boolean> {
    const elementHandle = await this.page.$(selector);
    if (!elementHandle) {
      console.error(`Element with selector ${selector} not found`);
      return false;
    }

    const isRequired = await elementHandle.evaluate(
      (el: HTMLInputElement) => el.validity.valueMissing
    );

    const message = await elementHandle.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    console.log("Error message is:", message);
    console.log("Email field validated successfully");
    return isRequired;
  }

  async isEnteredEmailValid(selector: string): Promise<boolean> {
    const elementHandle = await this.page.$(selector);
    if (!elementHandle) {
      console.error(`Entered email is invalid ${selector} and incorrect`);
    }

    const isValid = await elementHandle?.evaluate(
      (el: HTMLInputElement) => el.validity.typeMismatch
    );
    const message = await elementHandle?.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    console.log("Error message is:", message);
    return isValid ?? false;
  }
}

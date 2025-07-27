import { Page, Locator } from "@playwright/test";
export class FormValidationPage {
  readonly page: Page;
  contactName: Locator;
  contactNumber: Locator;
  registerButton: Locator;
  pickUpDate: Locator;
  paymentMethod: Locator;
  confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactName = this.page.locator("input[name='ContactName']");
    this.contactNumber = this.page.locator("input[name='contactnumber']");
    this.registerButton = this.page.locator("button[type='submit']");
    this.pickUpDate = this.page.locator("input[name='pickupdate']");
    this.paymentMethod = this.page.locator("select[name='payment']");
    this.confirmationMessage = this.page.locator(
      "div.container div.alert.alert-info > p"
    );
  }

  async navigateToFormValidationPage() {
    await this.page.goto("https://practice.expandtesting.com/form-validation");
  }

  async enterContactName(name: string) {
    await this.contactName.fill(name);
  }

  async enterContactNumber(number: string) {
    await this.contactNumber.fill(number);
  }

  async selectPickUpDate(date: string) {
    await this.pickUpDate.fill(date);
  }

  async selectPaymentMethod(method: string) {
    await this.paymentMethod.selectOption(method);
  }

  async clickRegistrationButton() {
    await this.registerButton.click();
  }

  async getConfirmationMessage(): Promise<string> {
    return await this.confirmationMessage
      .textContent()
      .then((text) => text?.trim() || "");
  }
  async getResponse(): Promise<string> {
    return "API response placeholder";
  }

  async getResponseStatus(): Promise<number> {
    return 200;
  }

  async getResponseBody(): Promise<any> {
    return { message: "API response body placeholder" };
  }

  async getResponseHeaders(): Promise<any> {
    return {
      "content-type": "application/json",
      "x-custom-header": "value",
    };
  }
}

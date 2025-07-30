import { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export class NewUserSignUpPage {
  readonly page: Page;
  nameInput: Locator;
  emailInput: Locator;
  signupButton: Locator;
  accountInfoMessage: Locator;
  successMessage: Locator;
  radioTitle: Locator;
  passwordInput: Locator;
  daysDropdown: Locator;
  monthDropdown: Locator;
  yearDropdown: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  addressInput: Locator;
  countryDropdown: Locator;
  stateInput: Locator;
  cityInput: Locator;
  zipCodeInput: Locator;
  mobileInput: Locator;
  createAccountButton: Locator;
  accountInformationMessage: Locator;
  continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = this.page.locator("input[placeholder='Name']");
    this.emailInput = this.page.locator("input[data-qa='signup-email']");
    this.signupButton = this.page.locator("button[data-qa='signup-button']");
    this.accountInfoMessage = this.page.locator("div[class='login-form'] h2 b");
    this.successMessage = this.page.locator("div[class='signup-form'] h2 b");
    this.radioTitle = this.page.locator("input[id='id_gender1']");
    this.passwordInput = this.page.locator("input[name='password']");
    this.daysDropdown = this.page.locator("select[id='days']");
    this.monthDropdown = this.page.locator("select[id='months']");
    this.yearDropdown = this.page.locator("select[id='years']");
    this.firstNameInput = this.page.locator("input[id='first_name']");
    this.lastNameInput = this.page.locator("input[id='last_name']");
    this.addressInput = this.page.locator("input[name='address1']");
    this.countryDropdown = this.page.locator("select[id='country']");
    this.stateInput = this.page.locator("input[id='state']");
    this.cityInput = this.page.locator("input[id='city']");
    this.zipCodeInput = this.page.locator("input[id='zipcode']");
    this.mobileInput = this.page.locator("input[name='mobile_number']");
    this.createAccountButton = this.page.locator(
      "button[data-qa='create-account']"
    );
    this.accountInformationMessage = this.page.locator(
      "h2[data-qa='account-created'] b"
    );
    this.continueButton = this.page.locator("a[data-qa='continue-button']");
  }

  async navigateToSignupPage() {
    await this.page.goto("https://automationexercise.com/signup");
  }

  async enterName(name: string) {
    await this.nameInput.fill(name);
  }

  async enterEmail() {
    const timeStamp = Date.now();

    const uniqueEmail = `user_${timeStamp}@test.com`;
    await this.emailInput.fill(uniqueEmail);

    const credentials = {
      email: uniqueEmail,
      password: "Password123",
    };

    const dirPath = path.resolve(__dirname, "..", "..", "test-data");
    const filePath = path.resolve(dirPath, "userCredentials.json");

    // ✅ Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(credentials, null, 2));
  }

  async clickSignupButton() {
    await this.signupButton.click();
  }
  async getAccountInformationMessage() {
    const message = this.accountInfoMessage.first();
    return await message.textContent();
  }

  async clickRadiotitle() {
    await this.radioTitle.click();
  }

  async enterPassword() {
    await this.passwordInput.fill("Password123");
  }

  async selectDateOfBirth() {
    await this.daysDropdown.selectOption({ label: "21" });
    await this.monthDropdown.selectOption({ label: "October" });
    await this.yearDropdown.selectOption({ label: "2005" });
  }

  async enterPersonalDetails() {
    await this.firstNameInput.fill("John");
    await this.lastNameInput.fill("Doe");
    await this.addressInput.fill("123 Main st");
    await this.countryDropdown.selectOption({ label: "United States" });
    await this.stateInput.fill("California");
    await this.cityInput.fill("Los Angeles");
    await this.zipCodeInput.fill("411033");
    await this.mobileInput.fill("7768067432");
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }

  async getAccountInformationMessageText(
    timeout: number = 15000
  ): Promise<string | null> {
    const messageLocator = this.page.locator("h2[data-qa='account-created']");
    await messageLocator.waitFor({ state: "visible", timeout });
    return (await messageLocator.textContent())?.trim() || "";
  }

  async anchorLinkTextValidation() {
    const headerLinks = this.page.locator(
      "div[class='shop-menu pull-right'] ul li a"
    );
    const expectedTexts = [
      "Home",
      "Products",
      "Cart",
      "Signup / Login",
      "Test Cases",
      "API Testing",
      "Video Tutorials",
      "Contact us",
    ];

    const linkCount = await headerLinks.count();
    for (let i = 0; i < linkCount; i++) {
      const linkText = await headerLinks.nth(i).innerText();
      const actualText = linkText.trim();
      const cleanText = actualText.replace(/[^\w\s\/]/g, "").trim();
      const expectedText = expectedTexts[i];
      expect(cleanText).toBe(expectedText);
      console.log(cleanText);
    }

    console.log("all anchor link text are validated successfully");
  }
}

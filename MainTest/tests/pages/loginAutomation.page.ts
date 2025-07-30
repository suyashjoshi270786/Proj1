import { Page, expect, Locator } from "@playwright/test";

export class LoginAutomationPage {
  readonly page: Page;
  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  loggedInAsText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.locator("input[data-qa='login-email']");
    this.passwordInput = this.page.locator("input[data-qa='login-password']");
    this.loginButton = this.page.locator("button[data-qa='login-button']");
    this.loggedInAsText = this.page.locator("li a:has(i.fa-user)");
  }

  async loginPage() {
    await this.page.goto("https://automationexercise.com/login");
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    const text = await this.loggedInAsText.innerText();
    expect(text).toContain("Logged in as");
  }
}

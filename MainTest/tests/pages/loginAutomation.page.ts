import { Page, expect, Locator } from "@playwright/test";

export class LoginAutomationPage {
  readonly page: Page;
  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  loggedInAsText: Locator;
  logoutButton: Locator;
  loginErrorText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.locator("input[data-qa='login-email']");
    this.passwordInput = this.page.locator("input[data-qa='login-password']");
    this.loginButton = this.page.locator("button[data-qa='login-button']");
    this.loggedInAsText = this.page.locator("li a:has(i.fa-user)");
    this.logoutButton = this.page.locator("a[href='/logout']");
    this.loginErrorText = this.page.locator("form[action='/login'] p");
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

  async logout() {
    await this.logoutButton.click();
    await this.page.waitForURL("https://automationexercise.com/login");
    const text = await this.page.url();
    expect(text).toBe("https://automationexercise.com/login");
    console.log("User logged out and redirected to login page");
  }

  async enterInvalidCredentials(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    const errorText = await this.loginErrorText.innerText();
    console.log("Error text:", errorText);
    expect(errorText).toContain("Your email or password is incorrect!");
    console.log("Invalid credentials error displayed as expected");

  }
}

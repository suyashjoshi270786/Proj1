import { Page, expect, Locator } from "@playwright/test";
import { CustomWorld } from "../../support/world";
export class TestCasesTab {
  readonly page: Page;
  testCasesTab: Locator;
  testCasesTitle: Locator;
  testCasesList: Locator;
  FeedbackSectionText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.testCasesTab = this.page.locator("a[href='/test_cases']");
    this.testCasesTitle = this.page.locator("h2.title.text-center b");
    this.testCasesList = this.page.locator("a[data-toggle='collapse'] u");
    this.FeedbackSectionText = this.page.locator("a[href='#feedback']");
  }
  async clickonTestCasesTab() {
    await this.testCasesTab.click();
  }

  async verifyTestCasesTab() {
    const title = await this.page.url();
    console.log("Test Cases Tab Url:", title);
    expect(title).toBe("https://automationexercise.com/test_cases");

    await expect(this.testCasesTitle).toBeVisible(); // wait for it

    const TestCaseTitle = await this.testCasesTitle.textContent();
    console.log("Tab Title is:", TestCaseTitle);
    await expect(this.testCasesTitle).toHaveText("Test Cases");
  }

  async verifyTestCaseList() {
    const count = await this.testCasesList.count();
    console.log(`Total test case count is ${count}`);

    for (let i = 0; i < count; i++) {
      const testCaseName = await this.testCasesList.nth(i);
      const text = await testCaseName.textContent();
      console.log(` ${i + 1}.${text?.trim()}`);
    }
  }

  async verifyFeedbackSection() {
    await this.FeedbackSectionText.isVisible();
    await expect(this.FeedbackSectionText).toHaveText("Feedback for Us");
    console.log("Feedback For Us section is present in tab");
  }
}

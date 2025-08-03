import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { TestCasesTab } from "../pages/testCasesTab.page";

When("user clicks on the Test Cases tab from the home page", async function () {
  const testCaseTab = new TestCasesTab(this.page);
  await testCaseTab.clickonTestCasesTab();
});

Then(
  "user should be navigated to the Test Cases page successfully",
  async function () {
    const testCasesTab = new TestCasesTab(this.page);
    await testCasesTab.verifyTestCasesTab();
  }
);

Then("user sees list of test cases", async function () {
  const testCasesTab = new TestCasesTab(this.page);
  await testCasesTab.verifyTestCaseList();
});

Then(
  "user confirm that Feedback section is present test cases tab",
  async function () {
    const testCasesTab = new TestCasesTab(this.page);
    await testCasesTab.verifyFeedbackSection();
  }
);

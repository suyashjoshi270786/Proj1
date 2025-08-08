import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { TestCasesTab } from "../pages/testCasesTab.page";
import { CustomWorld } from "../../support/world";

When("user clicks on the Test Cases tab from the home page", async function (this: CustomWorld) {

  await this.testCaseTab.clickonTestCasesTab();
});

Then(
  "user should be navigated to the Test Cases page successfully",
  async function (this: CustomWorld) {

    await this.testCaseTab.verifyTestCasesTab();
  }
);

Then("user sees list of test cases", async function (this: CustomWorld) {
  
  await this.testCaseTab.verifyTestCaseList();
});

Then(
  "user confirm that Feedback section is present test cases tab",
  async function (this: CustomWorld) {

    await this.testCaseTab.verifyFeedbackSection();
  }
);

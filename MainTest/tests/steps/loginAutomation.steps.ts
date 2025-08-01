import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginAutomationPage } from "../pages/loginAutomation.page";
import * as fs from "fs";
import { json } from "stream/consumers";

Given("user is on login page", async function () {
  await this.page.goto("https://automationexercise.com/login");
});

When("user enters valid credentials from test data", async function () {
  const loginPage = new LoginAutomationPage(this.page);
  const rawData = fs.readFileSync(
    "MainTest/test-data/userCredentials.json",
    "utf-8"
  );
  const credentials = JSON.parse(rawData);

  await loginPage.login(credentials.email, credentials.password);
});

When("user clicks on the login button", async function () {
  console.log("Clicking on the login button");
});

Then("user should see the logged in home page", async function () {
  console.log("Verifying the logged in home page");
});

Then("user logs out and is redirected to the login page", async function () {
  const loginPage = new LoginAutomationPage(this.page);
  await loginPage.logout();
});

When("user enters invalid credentials from test", async function () {
  const loginPage = new LoginAutomationPage(this.page);
  const rawData = fs.readFileSync(
    "MainTest/test-data/invalidCredentials.json",
    "utf-8"
  );
  const credentials = JSON.parse(rawData);
  await loginPage.enterInvalidCredentials(
    credentials.email,
    credentials.password
  );
});

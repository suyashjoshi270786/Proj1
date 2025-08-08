import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginAutomationPage } from "../pages/loginAutomation.page";
import { CustomWorld } from "../../support/world";
import * as fs from "fs";
import { json } from "stream/consumers";

Given("user is on login page", async function (this: CustomWorld) {
  await this.page.goto("https://automationexercise.com/login");
});

When("user enters valid credentials from test data", async function (this: CustomWorld) {

  const rawData = fs.readFileSync(
    "MainTest/test-data/userCredentials.json",
    "utf-8"
  );
  const credentials = JSON.parse(rawData);
  await this.loginPage.login(credentials.email, credentials.password);
});

When("user clicks on the login button", async function (this: CustomWorld) {
  console.log("Clicking on the login button");
});

Then("user should see the logged in home page", async function () {
  console.log("Verifying the logged in home page");
});

Then("user logs out and is redirected to the login page", async function (this: CustomWorld) {
  
  await this.loginPage.logout();
});

When("user enters invalid credentials from test", async function (this: CustomWorld) {
  
  const rawData = fs.readFileSync(
    "MainTest/test-data/invalidCredentials.json",
    "utf-8"
  );
  const credentials = JSON.parse(rawData);
  await this.loginPage.enterInvalidCredentials(
    credentials.email,
    credentials.password
  );
});

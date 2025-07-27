import { Given, When, Then } from "@cucumber/cucumber";
import { expect, request, Page } from "@playwright/test";
import { CustomWorld } from "../../support/world";

//let response: any;

Given("user navigates to the Reqres app homepage", async function () {
  await this.page.goto("https://app.reqres.in");
});

When("user checks the GET client endpoint", async function () {
  const context = await request.newContext();
  this.response = await context.get(
    "https://clerk.reqres.in/v1/client?__clerk_api_version=2025-04-10&_clerk_js_version=5.77.0"
  );
  //this.response = response; // ✅ Store in World
});

Then("the UI title should be {string}", async function (string) {
  const heading = await this.page.locator("h1").first();
  const title = await heading.textContent();
  expect(heading).toHaveText(title);
});

Then("the response status should be 200", async function () {
  expect(this.response.status()).toBe(200);

  console.log("Response Status:", await this.response.status());
  console.log("Response Body:", await this.response.json());
});

import { When, Then } from "@cucumber/cucumber";
import { expect, request } from "@playwright/test";
import { CustomWorld } from "../../support/world";

//let response: any;
//jj

When("user fetch the clerk client configuration", async function () {
 const context = await request.newContext();
 this.response  = await context.get('https://clerk.reqres.in/v1/client?__clerk_api_version=2025-04-10&_clerk_js_version=5.77.0');

});

Then("user should receive a 200 status code", async function () {
expect(this.response.status()).toBe(200);
});

Then("the response should contain client info", async function () {
  const body = await this.response?.json();
  expect(body).toHaveProperty('client');
  console.log("API Response:", body);
  console.log("API Testing Completed Successfully");
});

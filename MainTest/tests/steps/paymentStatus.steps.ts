import { Given, When, Then } from "@cucumber/cucumber";
import { expect, request } from "@playwright/test";
import { CustomWorld } from "../../support/world";

When("user fetch the payment status", async function () {
  const context = await request.newContext();
  this.response = await context.get(
    "https://automationexercise.com/api/brandsList"
  );
  // expect(this.response.status()).toBe(200);
});

Then(
  "the response should contain payment status information",
  async function () {
    const responseBody = await this.response.json();
    console.log("Response Status:", this.response.status());
    console.log("Response Body:", responseBody);
    expect(responseBody).toHaveProperty("brands");
    const brandNames = responseBody.brands.map((brand: any) => brand.brand);
    expect(brandNames).toContain("Polo");
  }
);

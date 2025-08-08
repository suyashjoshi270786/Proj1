import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ProductTab } from "../pages/productTab.page";
import { CustomWorld } from "../../support/world";

When(
  "user clicks on products tab from home screen",
  async function (this: CustomWorld) {
    await this.productsTab.clickOnProductTab();
  }
);

When(
  "validate successful navigation to product tab",
  async function (this: CustomWorld) {
    const title = await this.productsTab.validateProductPage();
    expect(title).toContain("https://automationexercise.com/products");
  }
);

Then(
  "user verifies that product list is visible",
  async function (this: CustomWorld) {
    const totalCount = await this.productsTab.validateProductList();
    expect(totalCount).toBe(34);
  }
);

When(
  "user click on View Product button on first product",
  async function (this: CustomWorld) {
    await this.productsTab.clickOnViewProductButton();
  }
);

When("user landed on product page", async function (this: CustomWorld) {
  const productPage = await this.productsTab.productDetailsPage();
  expect(productPage).toContain(
    "https://automationexercise.com/product_details/1"
  );
});

Then(
  "user verify that product details are visible",
  async function (this: CustomWorld) {
    const details = await this.productsTab.getProductDetails();
    expect(details.title).toContain("Blue Top");
    expect(details.category).toContain("Women > Tops");
    expect(details.price).toContain("Rs. 500");
    expect(details.available).toContain("In Stock");
    expect(details.condition).toContain("New");
    expect(details.addToCart).toBeTruthy();
    expect(details.quantity).toBe("1");
    expect(details.brand).toContain("Polo");
  }
);

When(
  "user enters {string} and {string} in review section",
  async function (name, email) {
    await this.productsTab.enterUserName(name);
    await this.productsTab.enterUserEmail(email);
  }
);

When(
  "user enters review as {string} in add review test field",
  async function (string) {
    await this.productsTab.enterReviewComents(string);
  }
);

When(
  "user clicks on Submit button on review section",
  async function (this: CustomWorld) {
    await this.productsTab.clickOnSubmitButton();
  }
);

Then("success message {string} is displayed", async function (string) {
  const text = await this.productsTab.validateSuccessMessage();
  expect(text).toContain(string);
});

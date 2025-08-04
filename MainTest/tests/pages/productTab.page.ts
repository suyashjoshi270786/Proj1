import { Page, expect, Locator } from "@playwright/test";
import { CustomWorld } from "../../support/world";

export class ProductTab {
  readonly page: Page;
  productsTab: Locator;
  totalProductCount: Locator;
  brandNamesList: Locator;
  viewProductButton: Locator;
  priceOnProductDetailsPage: Locator;
  productNameOnProductDetailsPage: Locator;
  productCategoryOnProductDetailsPage: Locator;
  productAvailability: Locator;
  productCondition: Locator;
  productBrand: Locator;
  addToCartButtonOnProductDetails: Locator;
  productQuantity: Locator;
  nameInReview: Locator;
  emailInReview: Locator;
  submitButtonReview: Locator;
  successMessageInReview: Locator;
  reviewInputText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTab = this.page.locator("li a[href='/products']");
    this.totalProductCount = this.page.locator(
      "div[class='overlay-content'] h2"
    );
    this.brandNamesList = this.page.locator("div[class='brands-name'] a");
    this.viewProductButton = this.page.locator("a[href='/product_details/1']");
    this.priceOnProductDetailsPage = this.page.getByText("Rs. 500", {
      exact: false,
    });
    this.productNameOnProductDetailsPage = this.page.locator(
      "div.product-information h2"
    );
    this.productCategoryOnProductDetailsPage = this.page
      .locator("div.product-information p")
      .first();
    this.productAvailability = this.page.locator("div.product-information p", {
      hasText: "Availability:",
    });
    this.productCondition = this.page.locator("div.product-information p", {
      hasText: "Condition:",
    });
    this.productBrand = this.page.locator("div.product-information p", {
      hasText: "Brand:",
    });
    this.addToCartButtonOnProductDetails = this.page.locator(
      "button[class*='cart']"
    );
    this.productQuantity = this.page.locator("#quantity");
    this.submitButtonReview = this.page.locator("button[id='button-review']");
    this.emailInReview = this.page.locator("input[id='email']");
    this.nameInReview = this.page.locator("input[id='name']");
    this.successMessageInReview = this.page.locator(
      "div[class*='alert-success'] span"
    );
    this.reviewInputText = this.page.locator("textarea[id='review']");
  }

  async clickOnProductTab() {
    await this.productsTab.click();
  }

  async validateProductPage() {
    const productUrl = await this.page.url();
    return productUrl;
  }

  async validateProductList() {
    const productCount = await this.totalProductCount.count();
    console.log(`Total number of product which are in list is ${productCount}`);
    return productCount;
  }

  async clickOnViewProductButton() {
    await this.viewProductButton.click();
  }

  async productDetailsPage() {
    const productDetailsURL = this.page.url();
    return productDetailsURL;
  }

  async getProductDetails() {
    return {
      title: await this.productNameOnProductDetailsPage.textContent(),
      price: await this.priceOnProductDetailsPage.textContent(),
      category: await this.productCategoryOnProductDetailsPage.textContent(),
      available: await this.productAvailability.textContent(),
      condition: await this.productCondition.textContent(),
      brand: await this.productBrand.textContent(),
      addToCart: await this.addToCartButtonOnProductDetails.isVisible(),
      quantity: await this.productQuantity.inputValue(),
    };
  }

  async enterUserName(name: string) {
    await this.nameInReview.fill(name);
  }

  async enterUserEmail(email: string) {
    await this.emailInReview.fill(email);
  }

  async enterReviewComents(comments: string) {
    await this.reviewInputText.fill(comments);
  }

  async clickOnSubmitButton() {
    await this.submitButtonReview.click();
  }

  async validateSuccessMessage() {
    const successText = await this.successMessageInReview.textContent();
    return successText;
  }
}

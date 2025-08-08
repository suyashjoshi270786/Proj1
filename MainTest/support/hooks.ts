import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright"; // No need to re-import Page or Browser
import { CustomWorld } from "./world";

setDefaultTimeout(60 * 1000);
Before(async function (this: CustomWorld) {
  console.log("✅ Before hook running...");
  //this.browser = await chromium.launch();
  this.browser = await chromium.launch({ headless: true, slowMo: 100 });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  console.log("✅ Page created?", !!this.page); // should print true

   await this.initObjects();
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.browser.close();
});

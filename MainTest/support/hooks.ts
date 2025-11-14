import { Before, After, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import {
  chromium,
  request as playwrightRequest,   // 👈 import request object
  APIRequestContext,
} from "@playwright/test";          // or "playwright" if you prefer
import { CustomWorld } from "./world";

setDefaultTimeout(60 * 1000);

let apiContext!: APIRequestContext;   // API client for the whole run
let payload: any;                     // (only if you really need it here)

Before(async function (this: CustomWorld) {
  console.log("Before hook running...");

  // UI browser/page
  this.browser = await chromium.launch({ headless: true, slowMo: 100 });
  const context = await this.browser.newContext();
  this.page = await context.newPage();

  // ✅ Correct way to create APIRequestContext
  apiContext = await playwrightRequest.newContext({
    baseURL: "https://rahulshettyacademy.com",
  });

  // optional: expose it on world if steps use `this.request`
  (this as any).request = apiContext;

  console.log("Page created?", !!this.page);

  await this.initObjects();
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.browser.close();
});

AfterAll(async () => {
  if (apiContext) {
    await apiContext.dispose();
  }
});

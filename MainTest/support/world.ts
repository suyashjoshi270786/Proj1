import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import { Page, Browser, APIResponse } from "playwright";

export class CustomWorld extends World {
  page!: Page;
  browser!: Browser;
  response!: APIResponse;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);

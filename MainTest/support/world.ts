import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import { Page, Browser } from 'playwright';

export class CustomWorld extends World {
  page!: Page;
  browser!: Browser;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);

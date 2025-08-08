import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import { Page, Browser, APIResponse } from "playwright";
import { ProductTab } from "../tests/pages/productTab.page";
import { TestCasesTab } from "../tests/pages/testCasesTab.page";
import { LoginAutomationPage } from '../tests/pages/loginAutomation.page'
import { NewUserSignUpPage } from "../tests/pages/newUserSignUp.page";
import { LoginPage } from "../tests/pages/loginPage";
import { FormValidationPage } from '../tests/pages/formValidation.page';
import { ContactUsFormPage } from '../tests/pages/contactUs.page';

export class CustomWorld extends World {
  page!: Page;
  browser!: Browser;
  response!: APIResponse;
  productsTab!: ProductTab;
  testCaseTab!: TestCasesTab;
  loginPage!: LoginAutomationPage;
  newUserSignUpPage!: NewUserSignUpPage;
  lognPage!: LoginPage;
  formValidationPage!: FormValidationPage;
  contactUsformPage!: ContactUsFormPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async initObjects() {
    this.productsTab = new ProductTab(this.page);
    this.testCaseTab = new TestCasesTab(this.page);
    this.loginPage = new LoginAutomationPage(this.page);
    this.newUserSignUpPage = new NewUserSignUpPage(this.page);
    this.lognPage = new LoginPage(this.page);
    this.formValidationPage = new FormValidationPage(this.page);
    this.contactUsformPage = new ContactUsFormPage(this.page);
  }
}

setWorldConstructor(CustomWorld);

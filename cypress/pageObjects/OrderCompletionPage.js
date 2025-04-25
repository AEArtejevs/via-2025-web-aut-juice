import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {

  static get url() {
    return "/#/";
  }

  static get confirmationMessage() {
    return cy.get('.confirmation');
  }
}
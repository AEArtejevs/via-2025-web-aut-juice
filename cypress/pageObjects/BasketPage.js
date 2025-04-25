import { BasePage } from "../pageObjects/basePage";

export class BasketPage extends BasePage {

  static get url() {
    return "/#/";
  }

  static get CheckoutButton() {
    return cy.get("#checkoutButton");
  }
  

  static get BasketContinueButton() {
    return cy.get("button[aria-label='Proceed to payment selection']");
  }
}
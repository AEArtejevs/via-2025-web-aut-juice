import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {

  static get url() {
    return "/#/";
  }
  static get placeOrderButton() {
    return cy.get('button[aria-label="Complete your purchase"]');
  }

  static get ordersAndPaymentMenuButton() {
    return cy.get('button[aria-label="Show Orders and Payment Menu"]');
  }

  static get mySavedAddressesButton() {
    return cy.get('button[aria-label="Go to saved addresses page"]');
  }

  static get myPaymentOptionsButton() {
    return cy.get('button[aria-label="Go to payment options page"]');
  }
}
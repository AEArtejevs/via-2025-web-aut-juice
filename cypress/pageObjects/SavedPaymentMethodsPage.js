import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {

  static get addNewCard() {
    return cy.get('.mat-expansion-panel-header-title')
  }
  static get nameInput() {
    return cy.get('#mat-input-1')  }

  static get cardNumberInput() {
    return cy.get('#mat-input-2')  }

  static get expiryMonthSelect() {
    return cy.get('#mat-input-3')  }

  static get expiryYearSelect() {
    return cy.get('#mat-input-4')  }

  static get submitButton() {
    return cy.get('#submitButton');
  }

  static get cardsList() {
    return cy.get('mat-row'); // All cards listed
  }
}

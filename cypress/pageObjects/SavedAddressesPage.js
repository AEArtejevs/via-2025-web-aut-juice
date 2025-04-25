import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get addNewAddressButton() {
    return cy.get('button[aria-label="Add a new address"]');
  }

  static get addressesList() {
    return cy.get('mat-row');
  }
}

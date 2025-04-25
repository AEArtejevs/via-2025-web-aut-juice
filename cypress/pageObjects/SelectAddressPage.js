import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {

    static get url() {
        return "/#/";
    }

    static get addressRows() {
        return cy.get('mat-row');
      }
      

    static get addNewAddressButton() {
        return cy.get("button[aria-label='Add a new address']");
      }

      
}
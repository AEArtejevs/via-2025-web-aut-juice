import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {

    static get url() {
        return "/#/";
    }

    static get deliveryRows() {
        return cy.get('mat-row'); 
    }
    static get continueButton() {
        return cy.get("button[aria-label='Proceed to delivery method selection']");
    }
}
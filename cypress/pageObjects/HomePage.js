import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }

  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get("#searchQuery input");
  }

  static get productBox() {
    return cy.get(".mat-grid-tile-content mat-card.mat-card");
  }
  static get productInfo() {
    return cy.get("app-product-details");
  }
  static get closeButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }


  static get reviewTextarea() {
    return cy.get('textarea[aria-label="Text field to review a product"]');
  }
  static get reviewSubmitButton() {
    return cy.get('button#submitButton');
  }
  static get productExpansionButton() {
    return cy.get('mat-expansion-panel[aria-label="Expand for Reviews"] mat-expansion-panel-header');
  }
  static get reviewText() {
    return cy.get('.review-text');
  }


  static get productCards() {
    return cy.get('mat-card'); // each product is in a mat-card
  }

  
  static get ordersAndPaymentButton() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }
  static get mySavedAddressesButton() {
    return cy.get("button[aria-label='Go to saved address page']");
  }

  static get myPaymentOptionsButton() {
    return cy.get("button[aria-label='Go to saved payment methods page']");
  }

  static get itemsPerPageDropdown() {
    return cy.get('mat-select[aria-label="Items per page:"]');
  }
  
  static get itemsPerPageOption() {
    return cy.get('mat-option');
  }

  static get addItemToBasket() {
    return cy.get("button[aria-label='Add to Basket']");
  }
  static get YourBasketButton() {
    return cy.get("button[aria-label='Show the shopping cart']");
  }
  

}

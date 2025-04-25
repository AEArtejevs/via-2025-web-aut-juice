import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";


describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com

      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      // Save that email address to some variable
      const emailAddress = `email_${randomNumber}@ebox.com`;
      const password = "AB123#";

      // Fill out registration form
      RegistrationPage.emailField.type(emailAddress);
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Open security question dropdown
      RegistrationPage.securityQuestionField.click();
      // Select "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegistrationPage.answerField.type("Beethoven");
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Log in with the newly created credentials
      LoginPage.emailField.clear().type(emailAddress);
      LoginPage.passwordField.clear().type(password);
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that the account name (with previously created email) appears
      HomePage.userProfileButton.should("contain.text", emailAddress);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });
    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should('contain.text', 'Sour but full of vitamins.');

    })
    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");
      // Close the card      
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");
    });
      // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productBox.contains("King of the Hill").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.productExpansionButton
      .click({ force: true })
      .should('have.attr', 'aria-expanded', 'true');    
           // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewText.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    });

      // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.reviewTextarea.type("Tastes like metal");
      // Click Submit
      HomePage.reviewSubmitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.productExpansionButton
      .click({ force: true })
      .should('have.attr', 'aria-expanded', 'true');
      // Validate review -  "Tastes like metal"
      HomePage.reviewText.should('contain.text', 'Tastes like metal');
    });
  
      // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.productCards.should('have.length', 12);
      // Change items per page to 24
      HomePage.itemsPerPageDropdown.click();
      HomePage.itemsPerPageOption.contains('24').click();
      // Change items per page (at the bottom of page) to 24
      HomePage.productCards.should('have.length', 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPageDropdown.click();
      HomePage.itemsPerPageOption.contains('36').click();
      // Validate that the amount of cards is 35
      HomePage.productCards.should('have.length', 35);
    });
      



    // Create scenario - Buy Girlie T-shirt
  it("Buy Girlie T-shirt", () => {
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for Girlie
    HomePage.searchField.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addItemToBasket.click();
    // Click on "Your Basket" button
    HomePage.YourBasketButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.CheckoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.addressRows
    .contains('United Fakedom')      
    .parents('mat-row')              
    .find('mat-radio-button')       
    .click();
    // Click Continue button
    BasketPage.BasketContinueButton.click();

    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.deliveryRows
    .contains('Standard Delivery')      
    .parents('mat-row')              
    .find('mat-radio-button')       
    .click();
    // Click Continue button
    DeliveryMethodPage.continueButton.click();

    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.deliveryRows
    .contains('5678')      
    .parents('mat-row')              
    .find('mat-radio-button')       
    .click();
    // Click Continue button
    PaymentOptionsPage.continueButton.click();

    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.placeOrderButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.confirmationMessage
    .should('contain.text', 'Thank you for your purchase!');
  });

    // Create scenario - Add address
  it("Add address", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersAndPaymentButton.click();
    // Click on My saved addresses
    HomePage.mySavedAddressesButton.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SelectAddressPage.addNewAddressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information

    CreateAddressPage.countryField.type("Testland");
    CreateAddressPage.nameField.type("John Doe");
    CreateAddressPage.mobileNumberField.type("1234567890");
    CreateAddressPage.zipCodeField.type("54321");
    CreateAddressPage.addressField.type("123 Test Street");
    CreateAddressPage.cityField.type("Testville");
    CreateAddressPage.stateField.type("Testonia");
    // Click Submit button
    CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
    SavedAddressesPage.addressesList.should('contain.text', 'John Doe');
  });


// Create scenario - Add payment option
it("Add payment option", () => {
  // Click on Account
  HomePage.accountButton.click();
  // Click on Orders & Payment
  HomePage.ordersAndPaymentButton.click();
  // Click on My payment options
  HomePage.myPaymentOptionsButton.click();
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
  SavedPaymentMethodsPage.addNewCard.click();
  // Fill in Name
  SavedPaymentMethodsPage.nameInput.type("John Doe");
  // Fill in Card Number
  SavedPaymentMethodsPage.cardNumberInput.type("4111111111115678");
  // Set expiry month to 7
  SavedPaymentMethodsPage.expiryMonthSelect.select("7");
  // Set expiry year to 2090
  SavedPaymentMethodsPage.expiryYearSelect.select("2090");
  // Click Submit button
  SavedPaymentMethodsPage.submitButton.click();
  // Validate that the card shows up in the list
  SavedPaymentMethodsPage.cardsList.should('contain.text', '5678');
});
  });
});

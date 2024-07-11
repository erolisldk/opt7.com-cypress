const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const redBorder = 'border: 1px solid red';

When('User sees to Get Your 90 days button', () => {
 cy.get('.elementor-element-26144fe > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
 .should('be.visible');
});

When('Tries to login with only valid password', () => {
  cy.fixture('users.json').then((users) => {
    cy.loginViaUI(null, users.admin.password);
  });
});

When('Tries to login with only valid username', () => {
  cy.fixture('users.json').then((users) => {
    cy.loginViaUI(users.admin.username, null);
  });
});

When('User should verify that Get Your 90 days button is clickable', () => {
 cy.get('.elementor-element-26144fe > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
 .should('not.be.disabled')
 .should('have.attr', 'href');
});

Then('User is Logged In', () => {
  cy.xpath('//a[text()="Logout"]').should('be.visible');
});

Then('User should verify that Durans photo is clickable', () => {
 cy.get("img[id='NjY4OjU2MQ==-1']")
 .should('exist')     // Resmin sayfada var olduğunu doğrulayın
 .and('be.visible'); // Resmin görünür olduğunu doğrulayın
});

Then('User is still on Booking Management login page', () => {
  cy.contains('Log into your account');
});

Then('Username field will have red border', () => {
  cy.get('#username').should('have.attr', 'style').as(redBorder);
});

Then('Password field will have red border', () => {
  cy.get('#password').should('have.attr', 'style').as(redBorder);
});

Then('Both Username and Passwords fields will have red border', () => {
  cy.get('#username').should('have.attr', 'style').as(redBorder);
  cy.get('#password').should('have.attr', 'style').as(redBorder);
});

const { Before, After } = require('@badeball/cypress-cucumber-preprocessor');

Before(() => {

});

After(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});

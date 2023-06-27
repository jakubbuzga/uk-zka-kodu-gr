import { Given, When, Then } from '@@badeball/cypress-cucumber-preprocessor';

const selectors = {
    pageHeader: () => cy.get('[data-cy="pageHeader"]'),
    menuItems: () => cy.get('[data-cy="menuItem"]') //will return array of cypress objects containing every menu item from left menu
};

Given('I will bypass the login', () => {
    // Faking response with staging token(needed by implementation on staging environment)
    cy.intercept('GET', 'v2/api/login/token', (req) => {
        req.reply({
            statusCode: 200,
            body: {
                token: 'token'
            }
        })
    })
})

When('I click on the {string} menu item', (menuItem: string) => {
    selectors.menuItems().contains(menuItem).click();
})

Then('I am at the {string} section', (pageName: string) => {
    selectors.pageHeader().contains(pageName);
})
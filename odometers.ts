import { When, Then } from '@@badeball/cypress-cucumber-preprocessor';
import { selectors } from './selectorsOdometers';

When('I click on the Add new odometer button', () => {
    selectors.createOdometer.createOdometerBtn().click();
})

Then('I fill in the {string} in the Name field', (name: string) => {
    selectors.createOdometer.odometerNameField().clear().type(name);
})

// next Thens are represented as and in .feature file but newest version of cypress cucumber preprocessor doesn't support And
Then('I fill in the {string} in the initial state field', (initialState: string) => {
    selectors.createOdometer.initialStateField().clear().type(initialState);
})

Then('I click on the Create new odometer button', () => {
    cy.intercept('POST', 'v2/api/odometers/createOdometer/*').as('createOdometer');
    selectors.createOdometer.createOdometerFormBtn().click();
    cy.wait('@createOdometer');
})

Then('I see new odometer {string} were created', (name: string) => {
    selectors.odometers.odometerItemNames().contains(name);
})
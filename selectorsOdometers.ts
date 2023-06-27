export const selectors = {
    odometers: {
        odometerItemNames: () => cy.get('[data-cy="odometerName"]') //will return array of cypress objects containing every odometer name from list
    },
    createOdometer: {
        createOdometerBtn: () => cy.get('[data-cy="createOdometerButton"]'),
        odometerNameField: () => cy.get('[data-cy="odometerNameField"]'),
        initialStateField: () => cy.get('[data-cy="initialStateField"]'),
        createOdometerFormBtn: () => cy.get('[data-cy="createdOdometerFormBtn"]')
    }
}
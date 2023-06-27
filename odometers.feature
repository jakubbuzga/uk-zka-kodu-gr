Feature: Can open and operate odometers section

    Background: 
        Given I will bypass the login
        When I click on the "Odometers" menu item
        Then I am at the "Odometers" section

    Scenario: I can add new odometer
        When I click on the Add new odometer button
        Then I fill in the "Odometer 1" in the Name field
        And I fill in the "1200" in the initial state field
        And I click on the Create new odometer button
        Then I see new odometer "Odometer 1" were created


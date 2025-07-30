Feature: User login functionality

Scenario: Successful login with valid credentials
    Given user is on login page
    When user enters valid credentials from test data
    And user clicks on the login button
    Then user should see the logged in home page

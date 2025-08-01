Feature: User login functionality

  Scenario: Successful login with valid credentials
    Given user is on login page
    When user enters valid credentials from test data
    And user clicks on the login button
    Then user should see the logged in home page

  Scenario: Successful login with valid credentials and logged out
    Given user is on login page
    When user enters valid credentials from test data
    And user clicks on the login button
    Then user should see the logged in home page
    And user logs out and is redirected to the login page

  Scenario: Unsuccessful login with invalid credentials
    Given user is on login page
    When user enters invalid credentials from test

Feature: New User Signup
  As a new user
  I want to sign up by providing my name and email
  So that I can create an account on Automation Exercise website

  Scenario: Successful signup with valid details
    Given I am on the Signup Login page
    When I enter name as "<name>"
    And I enter email address as a unique email
    And I click on the Signup button
    Then I should be redirected to the account information page
    And I should personal details in the form
    And I should click on Create Account button
    Then I should see the account information message
    And I click on Continue button

    Examples:
      | name     |
      | John Doe |

  Scenario: Ensure all anchor links in header are correct
    Given user is on home page
    Then user validates all anchor link text in header

    Scenario: Verify error message for existing email
    Given I am on the Signup Login page
    When I enter name as "<name>"
    And I enter email address as an existing email from the test data
    And I click on the Signup button
    Then I should see an error message indicating that the email already exists


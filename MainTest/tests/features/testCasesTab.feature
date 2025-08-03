Feature: Validation of Test Cases tab

  Background:
    Given user is on login page
    When user clicks on the Test Cases tab from the home page

  Scenario: Validate navigation to the Test Cases page
    Then user should be navigated to the Test Cases page successfully

  Scenario: Validate names of all test cases under test cases tab
    Then user sees list of test cases

  Scenario: Verify Feedback section is present on test cases tab
    Then user confirm that Feedback section is present test cases tab

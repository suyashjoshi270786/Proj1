Feature: Validate Contact Us page

  Background:
    Given user is on the Contact Us form

  Scenario: Submit contact form with valid details
    When user enters name as "Suyash Joshi"
    And user enters email as "suyash.joshi@test.com"
    And user enters subject as "Feedback"
    And user enters message as "Great site for test automation practice!"
    And user clicks on Choose File button and upload file
    And user clicks on Submit button
    Then a success message "Success! Your details have been submitted successfully." should be displayed

  Scenario: Submit contact form with valid details and select Cancel button on dialog
    When user enters name as "Suyash Joshi"
    And user enters email as "suyash.joshi@test.com"
    And user enters subject as "Feedback"
    And user enters message as "Great site for test automation practice!"
    And user clicks on Choose File button and upload file
    Then user clicks on Submit button and selects Cancel on dialog

  Scenario: Submit contact form with blank email
    When user enters name as "Suyash Joshi"
    And user enters email as ""
    And user clicks on Submit button
    Then email field should show required error

  Scenario: Submit contact form with invalid email
    When user enters name as "Suyash Joshi"
    And user enters email as "aa"
    And user clicks on Submit button
    Then email field show error message for invalid email

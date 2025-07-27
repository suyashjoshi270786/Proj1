Feature: Form Validation submission API Test

  Scenario: Submit form and validate backend API
    Given user is on form validation page
    When user enters "<ContactName>" and "<ContactNumber>" as contact details
    And selects "<PickUpDate>" and "<PaymentMethod>"
    And clicks the Register button
    Then a confirmation message should be shown
    And the backend API should respond with 200
    And the response should contain the submitted contact details

    Examples:
      | ContactName | ContactNumber | PickUpDate | PaymentMethod |
      | John Miller |   012-1232321 | 2023-10-01 | card          |

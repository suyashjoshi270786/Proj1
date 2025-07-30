Feature: API Payment Status

Scenario: Fetch payment status
    When user fetch the payment status
    Then user should receive a 200 status code
    And the response should contain payment status information
    
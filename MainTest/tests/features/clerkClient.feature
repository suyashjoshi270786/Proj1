Feature: Clerk API client configuration

Scenario: Fetch clerk client configuration
    When user fetch the clerk client configuration
    Then user should receive a 200 status code
    And the response should contain client info
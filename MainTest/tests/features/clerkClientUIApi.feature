Feature: Requres App UI + API Validation

  Scenario: Verify homepage loads and API Responds correctly
    Given user navigates to the Reqres app homepage
    When user checks the GET client endpoint
    Then the UI title should be "The Complete API Platform: Persistent Backend, Custom Endpoints & Fake Data"
    And the response status should be 200
    And the response should contain client info

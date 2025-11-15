# File: MainTest/tests/features/place.feature
Feature: Places API – Add and retrieve place
  As a client of the Maps API
  I want to add a new place
  So that I can fetch it later and verify its details

  Scenario: Add a place and get its details
    Given I create a new place using the Places API
    When I fetch that place by its id
    Then the place details should match the request

  Scenario: Update place details API
    Given user updates place using Places API
    When updates address using existing place id
    Then user address details updated and receives 200 Ok response

    Scenario: Delete place details API
    Given user deletes place using place API
    When deletes place using existing place id
    Then place details deleted and receives 200 OK response

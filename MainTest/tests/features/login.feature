Feature: Login Functionlity

  Scenario: Successfuly Login
    Given user is on the login page
    When user enters valid "<username>" and "<password>"
    Then user should be redirecte to the dashboard

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

Feature: Validation of Products tab

  Scenario: Verify All Products and product detail page
    Given user is on login page
    When user clicks on products tab from home screen
    And validate successful navigation to product tab
    Then user verifies that product list is visible
    When user click on View Product button on first product
    And user landed on product page
    Then user verify that product details are visible

  Scenario: Verify the Write Review section in product details page
    Given user is on login page
    When user clicks on products tab from home screen
    When user click on View Product button on first product
    And user enters "<name>" and "<email>" in review section
    And user enters review as "Product quality is best" in add review test field
    And user clicks on Submit button on review section
    Then success message "Thank you for your review." is displayed

    Examples:
      | name         | email                  |
      | Suyash Joshi | suyash.joshi@gmail.com |

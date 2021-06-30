Feature: Desktop Page Functionality

  As a user I should be able to navigate through desktop page.
@Sanity
  Scenario: User should be able see products arranged in reverse alphabetical order on desktop page.
    Given I am on homepage
    When I click  on computers tab
    And I click on desktop
    And I select "Name: Z to A" from dropdown list
    Then I should see products arranged in reverse alphabetical order.


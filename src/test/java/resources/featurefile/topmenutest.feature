Feature: Top Menu Test

  As a User I should be able to click on all top menu tabs
@Sanity
  Scenario: User should be able to click on all top menu tabs
    Given I am on homepage
    When I click on any tabs "Computers" from Computers,Apparel,Electronics,Digital downloads,Books,Jewelry or Gift Cards
    Then I should nevigate to selected page
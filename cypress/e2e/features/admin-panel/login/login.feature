@HomePage
Feature: HomePage

  @sanity
  Scenario: User should be able to access home page content
    Given User goes to home page
    When User sees to Get Your 90 days button 
    Then User should verify that Get Your 90 days button is clickable
    And User should verify that Durans photo is clickable

@skip
  Scenario: User is not able to login with empty username
    When Tries to login with only valid password
    Then User is still on Booking Management login page
    And Username field will have red border

@skip
  Scenario: User is not able to login with empty password
    When Tries to login with only valid username
    Then User is still on Booking Management login page
    And Password field will have red border

@skip
  Scenario: User is not able to login with wrong password
    When Tries to login with wrong password
    Then User is still on Booking Management login page
    And Both Username and Passwords fields will have red border
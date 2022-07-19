@multi
Feature: The Internet Guinea Pig Website

  Scenario: As a user, I do a google search

    # Given I am on the login page "https://google.com"
    # When I login with <username> and <password>
    # Then I should see a flash message saying <message>
    Given I navigate to "https://google.com"
    And I search for "Test automation"
    And I click on options
# Examples:
#   | username | password             | message                        |
#   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
# | foobar   | barfoo               | Your username is invalid!      |

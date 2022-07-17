Feature: The Internet Guinea Pig Website

  @slow
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page "https://google.com"
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
# | foobar   | barfoo               | Your username is invalid!      |

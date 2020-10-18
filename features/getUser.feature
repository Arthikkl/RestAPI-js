Feature: Users List
Scenario: Verify Get List of Users.
Given I request the users list
Then I should receive the status code 200
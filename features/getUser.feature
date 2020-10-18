Feature: Users List
Scenario: Verify Get List of Users.
Given I request the users list
Then I should receive the status code 200
And i should get 'id'
And  i should get 'email'
And  i should get 'first_name'
And  i should get 'last_name'
And  i should get 'avatar'



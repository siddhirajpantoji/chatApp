@smoke
Feature: getSearchResults
    All scenarios for the 'getSearchResults' endpoint

    @validLogin
    Scenario: To verify match status in response for various inputs
        Given create a request
        When I hit endpoint with request
        Then I should get 200 responseStatus
        And I should get value in response


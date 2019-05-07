@login
Feature: Login
    All scenarios for the 'login' endpoint

    
    Scenario Outline: To verify match status in response for various inputs
        Given create a login request <Username> <Password>
        When I hit endpoint with request
        Then I should get any responseStatus
        And I should get value in response <Status>
        Examples:
            | Username                     | Password   | Status |
            | 'Sidd'                       | 'Sidd@123' | 400    |
            | 'siddhirajpantoji@gmail.com' | 'Sidd@123' | 200    |
            | ''                           | ''         | 400    |


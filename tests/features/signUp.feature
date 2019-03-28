Feature: SignUp

   This feature will test the signup Feature and do all validations which are required 

    Scenario: To Create  new Users with UserID and passwords 
    Given API is Up and running 
    When I Hit signup End point with user Details 
    Then Should get 200 status
    And Get user id in the response 

    
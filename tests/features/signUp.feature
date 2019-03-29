@signup
Feature: SignUp

   This feature will test the signup Feature and do all validations which are required

   
   Scenario Outline: Signup with User Details : To Create  new Users with UserID and passwords
      Given API is Up and running
      When I Hit signup End point with user Details <UserName> <Password> <ConfirmPassword> <FirstName> <LastName>
      Then Should get <Status> code
      And Get user id in the response
      Examples:
         | UserName  | Password  | ConfirmPassword | FirstName | LastName  | Status |
         | 'Value 1' | 'Value 2' | 'Value 3'       | 'Value 3' | 'Value 3' | 400    |

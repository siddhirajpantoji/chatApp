const {
    Before,
    Given,
    When,
    Then,
    After,
    Status,
    setDefaultTimeout, 
    BeforeAll,
    AfterAll
} = require('cucumber');

var should = require('chai').should(),
    expect = require('chai').expect;

  BeforeAll(()=>{
    console.log("Application startup over here ")
  })
    Given('create a login request {string} {string}', function (string, string2) {
        // Write code here that turns the phrase above into concrete actions
        console.log("value of String 1 :"+ string);
        console.log("value of String 2 :"+ string2);
        var reqBody = {
          username:string,
          password:string2
        }

        return 'pending';
      });

      When('I hit endpoint with request', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      
      Then('I should get any responseStatus', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      Then('I should get value in response {int}', function (int) {
          console.log("Value of Status ", int);
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });
      AfterAll(()=>{
        console.log("Application end over here ")
      }) 
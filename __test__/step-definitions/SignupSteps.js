require('dotenv').config();
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

const testingURL = process.env.TESTING_URL
const hitApi = require('../utils/api-request');

    Given('API is Up and running', function (callback) {
        console.log("Inside Signup ");
        
        
        hitApi.hitApi(testingURL+"/open/healthcheck",'GET',null,(err,data)=>{
          if(err){
              callback(err)
          }
          else{
            // console.log("Success in data ", data)
            // console.log(data.statusCode)
          //  this.apiResponse = data;
            console.log("Healthcekc ")
            callback(null,false);
            
          }
        })
        //return 'pending';
        // Hit  HealthCheck API here 
    // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });

    When('I Hit signup End point with user Details {string} {string} {string} {string} {string}', function (username, password, confirmPassword, firstName, lastName, callback) {
        // Write code here that turns the phrase above into concrete actions
        // Prepare Request here and hit the API 
        var reqData = {
          "username" : username,
          "password" : password,
          "passwordConfirmation" : confirmPassword,
          "first_name" : firstName,
          "last_name" : lastName
        }
        console.log(reqData);
        hitApi.hitApi(testingURL+"/open/signUp",'POST',reqData,(err,data)=>{
          if(err){
              callback(err)
          }
          else{
          console.log("Success in data ", data)
            // console.log(data.statusCode)
            this.apiResponse = data;
            console.log(" Sign Up  ");
            callback(null,data);
          }
        })
        //return 'pending';
    });

    Then('Should get {int} code', function (status) {
        // Write code here that turns the phrase above into concrete actions
        console.log( "Should case " +  this.apiResponse.statusCode);
        console.log("status "+ status)
        expect(status).equal(this.apiResponse.statusCode)
        //return 'pending';
      });

      Then('Get user id in the response', function () {
        // Write code here that turns the phrase above into concrete actions
        console.log()
        if( this.apiResponse.statusCode == 200)
        expect(typeof(1)).equal(typeof(this.apiResponse.user_id));
        else{
          return true;
        }
       // return 'pending';
      });
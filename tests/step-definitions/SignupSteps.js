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

const hitApi = require('../utils/api-request');

    Given('API is Up and running', function (callback) {
        console.log("Inside Signup ");
        
        var testingURL = process.env.TESTING_URL
        hitApi.hitApi(testingURL+"/open/healthcheck",'GET',null,(err,data)=>{
          if(err){
              callback(err)
          }
          else{
            // console.log("Success in data ", data)
            // console.log(data.statusCode)
            this.apiResponse = data;
            console.log("Healthcekc ")
            callback(null,data);
            
          }
        })
        //return 'pending';
        // Hit  HealthCheck API here 
    // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });

    When('I Hit signup End point with user Details {string} {string} {string} {string} {string}', function (string, string2, string3, string4, string5) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    Then('Should get {int} code', function (int) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

      Then('Get user id in the response', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });
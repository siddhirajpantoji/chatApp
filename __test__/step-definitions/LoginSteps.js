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
var app = require('../../app')

var hitAPI = require('../utils/api-request')
const testingURL = process.env.TESTING_URL;

var server;
  BeforeAll(()=>{
    console.log("Application startup over here ")
    var port = process.env.PORT
    server = app.listen(port,()=>{
      console.log("Server started at "+port );
    });
  })
    Given('create a login request {string} {string}', function (string, string2) {
        // Write code here that turns the phrase above into concrete actions
        console.log("Login Started here ")
        // console.log("value of String 1 :"+ string);
        // console.log("value of String 2 :"+ string2);
        var reqBody = {
          username:string,
          password:string2
        }
        this.reqBody= reqBody
        //return 'pending';
      });

      When('I hit endpoint with request', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var testingURL = process.env.TESTING_URL
        hitAPI.hitApi(testingURL+"/open/login",'POST',this.reqBody,(err,data)=>{
          if(err){
              callback(err)
          }
          else{
            // console.log("Success in data ", data)
            // console.log(data.statusCode)
            this.apiResponse = data;
            callback(null,data);
          }
        })
        //return 'pending';
      });

      
      Then('I should get any responseStatus', function () {
        // Write code here that turns the phrase above into concrete actions
        console.log("Inside response status ",this.apiResponse.statusCode);
        //return 'pending';
      });

      Then('I should get value in response {int}', function (int) {
        //  console.log("Value of Status ", int);
          expect(int).equal(this.apiResponse.statusCode)
        // Write code here that turns the phrase above into concrete actions
      //  return 'pending';
      });
      AfterAll(()=>{
        console.log("Application end over here ")
        server.close(()=>{
          console.log("Application Closed after Tests ");
        })
      }) 
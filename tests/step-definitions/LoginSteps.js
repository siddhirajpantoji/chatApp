const {
    Before,
    Given,
    When,
    Then,
    After,
    Status,
    setDefaultTimeout
} = require('cucumber');

var should = require('chai').should(),
    expect = require('chai').expect;

Before(function () {
    console.log('BEFORE');
});

Given('create a request', function () {
    console.log('GIVEN');
});

When('I hit endpoint with request', function () {
    console.log('WHEN');
});

Then('I should get 200 responseStatus', function () {
    console.log('THEN');
});

Then('I should get value in response', function (callback) {
    console.log('AND THEN');
    callback();
});

After(function () {
    console.log('AFTER');
})
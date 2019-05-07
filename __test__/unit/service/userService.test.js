var expect = require("chai").expect;
var userservice = require("../../../service/userservice");

jest.mock('../../../daoLayer/userDao');

describe("UserService class", () => {
    it("checkIfuserExists method - pass", () => {
        userservice.checkIfuserExists("pravin", (error, result) => {
            expect(result).to.be.true;
        });
    });

    it("checkIfuserExists method - error", () => {
        userservice.checkIfuserExists("akshay", (error, result) => {
            expect(error.status).to.equal(500);
            expect(error.message).to.equal("User Not Found ");
            expect(error.err).to.equal("custom error");
        });
    });

    it.skip("login method - pass", () => {
        var userData = {
            username: 'akshay',
            password: 'admin'
        };
        userservice.login(userData, (error, result) => {
            console.log("$$$$$$$ " + error);
            console.log("%%%%% " + result);
        });
    });

    it("login method - without custom error", () => {
        var userData = {
            username: 'pravin',
            password: 'admin'
        };
        userservice.login(userData, (error, result) => {
            expect(error.status).to.equal(401);
            expect(error.message).to.equal("User Not Verified ");
        });
    });

    it("login method - custom error", () => {
        var userData = {
            username: '',
            password: 'pravin'
        };
        userservice.login(userData, (error, result) => {
            expect(error.status).to.equal(401);
            expect(error.message).to.equal("User Not Verified ");
            expect(error.err).to.equal("custom error");
        });
    });
});
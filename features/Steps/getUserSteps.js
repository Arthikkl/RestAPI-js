const { assert } = require("console");
const { When, Then, Given  } = require("cucumber");

module.exports = { default: '--publish-quiet' }  
  
 
var baseurl ="https://reqres.in/api/users?page=2";

this.Given('I request the users list',  function () {
 
    let data =  fetch(baseurl)
    let json = data.json
    });
  

   this.Then('I should receive the status code {}', function () {
        
        var statuscode = 200;
        assert.isNumber(statuscode, 'Correct status');
        
    });

  
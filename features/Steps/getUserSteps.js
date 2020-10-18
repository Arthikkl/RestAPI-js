const { expect } = require("chai");
const { When, Then, Given  } = require("cucumber");
const fetch = require('node-fetch');

// module.exports = { default: '--publish-quiet' }  
  let json;
 
var baseurl ="https://reqres.in/api/users?page=2";

Given('I request the users list',  async () => {
 
    let response =  await fetch(baseurl);
    json = await response.json();
    // console.log(json.data);
    });  

   Then('I should receive the status code {int}', (statusCode) => {
        expect(statusCode).to.be.equal(200);
        
        
    });

    Then('i should get {string}', function (prop) {
        const dataArray = json.data;
        expect(dataArray.filter((occ) => occ[prop]).length).to.be.equal(dataArray.length);          
      });



     
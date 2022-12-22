import { createHeaders } from "./index";
const url = "https://boxinator-maven-api.herokuapp.com/api/countries";
fetch(url, {
  method: "GET",
  
  
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
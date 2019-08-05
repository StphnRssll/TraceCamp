/*choose an api (like swapi https://swapi.co/api/planets) and 
write a function to fetch its data (call the function multiple times to fetch all pages)
- loop/map through the results and print them to the console
- In a separate function that you pass to map, change the output (such as changing colors, https://www.npmjs.com/package/chalk) depending on the data (population 1000000 vs unknown)
*/

/*function loadJson(){

}

const loadJson = () => {
}
*/

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://swapi.co/api/planets/')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


axios.get('https://swapi.co/api/planets/?page=2')
  .then(function (response) {
    // handle success
    console.log("\n\n\n\n-------------------------------");
    console.log("page 2");
    console.log("\n");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
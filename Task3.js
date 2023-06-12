// Promise 1
console.log('============ Data Negara Dunia =============')
const axios = require("axios");
axios
  .get("https://restcountries.com/v3.1/all")

  .then((res) => {
    res.data.map((item) => {
      console.log(`Country name : ${item.name.common}`);
      console.log(`Region : ${item.region}`);
      console.log("--------------------------");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Promise 2
// console.log("======== Data Universitas di Amerika Serikat ========");
// const axios = require("axios");
// axios
//   .get("http://universities.hipolabs.com/search?country=United+States")

//   .then((res) => {
//     res.data.map((item) => {
//       console.log(`University name : ${item.name}`);
//       console.log("-------------------");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
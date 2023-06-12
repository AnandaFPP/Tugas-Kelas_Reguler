const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/users")

  .then((res) => {
    res.data.map((item) => {
      console.log(`Name : ${item.name}`);
      console.log("--------------------------");
    });
  })
  .catch((err) => {
    console.log(err);
  });
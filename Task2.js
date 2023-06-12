const getMonth = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = false;
        let listMonth = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "Desember",
        ];
        if (!error) {
          resolve(listMonth);
        } else {
          reject("Sorry data not found", []);
        }
      }, 4000);
    });
  };
  
  getMonth()
    .then((res) => {
      res.map((item) => {
        console.log(item);
      });
    })
    .catch((err) => {
      console.log(err);
    });
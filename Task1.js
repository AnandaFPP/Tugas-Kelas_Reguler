const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject("Hari ini bukan hari kerja");
      }
    }, 3000);
  });
};

cekHariKerja("sabtu")
  .then((result) => {
    console.log(`Hari kerja yang dimaksud adalah hari ${result}`);
  })
  .catch((error) => {
    console.log(error);
  });

// Penggunaan then catch pada promise adalah promise akan mengeksekusi ke satu nilai then, dan apabila ditolak maka akan dilewati hingga masuk ke bagian catch.

const checkDay = async (day) => {
  try {
    let result = await cekHariKerja(day);
    console.log(`Hari kerja yang dimaksud adalah hari ${result}`);
  } catch (err) {
    console.log(err);
  }
};

checkDay("minggu");

// Penggunaan try catch ialah kode akan dieksekusi terlebih dahulu di bagian try, dan apabila kode tersebut tidak bisa tereksekusi maka akan dilempar ke bagian catch.

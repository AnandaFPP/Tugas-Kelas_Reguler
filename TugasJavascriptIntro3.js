// Nomor 1
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject('Hari ini bukan hari kerja')
            }
        }, 3000)
    })
}

cekHariKerja('senin')
.then((result) => {
    console.log(`Hari kerja yang dimaksud adalah hari ${result}`)
})
.catch((error) => {
    console.log(error)
})

// Penggunaan then catch pada promise adalah promise akan mengeksekusi ke satu nilai then, dan apabila ditolak maka akan dilewati hingga masuk ke bagian catch.

// const validation = async () => {
//   try {
//     let result = await cekHariKerja('senin')
//     console.log(`Hari kerja yang dimaksud adalah hari ${result}`)
//   } catch (err) {
//     console.log(err)
//   }
// }

// validation()

// Penggunaan try catch ialah kode akan dieksekusi terlebih dahulu di bagian try, dan apabila kode tersebut tidak bisa tereksekusi maka akan dilempar ke bagian catch.

// Nomor 2
// const getMonth = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false
//             let listMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
//             if (!error) {
//                 resolve(listMonth)
//             } else {
//                 reject('Sorry data not found', [])
//             }
//         }, 4000)
//     })
// }

// getMonth()
// .then((res) => {
//   res.map((item) => {
//     console.log(item)
//   })
// })
// .catch((err) => {
//   console.log(err)
// })

// Nomor 3
// Promise 1
// const axios = require('axios')
// axios.get('https://restcountries.com/v3.1/all')

// .then((res) => {
//     res.data.map((item) => {
//         console.log(`Country name : ${item.name.common}`);
//         console.log(`Region : ${item.region}`);
//         console.log('--------------------------');
//     })
// })
// .catch(err => {
//     console.log(err)
// })

// Promise 2
// const axios = require("axios");
// axios
//   .get("http://universities.hipolabs.com/search?country=United+States")

//   .then((res) => {
//     res.data.map((item) => {
//       console.log(`University name : ${item.name}`)
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Nomor 4
// const axios = require('axios')
// axios.get('https://jsonplaceholder.typicode.com/users')

// .then((res) => {
//     res.data.map((item) => {
//         console.log(`Name : ${item.name}`);
//         console.log('--------------------------');
//     })
// })
// .catch(err => {
//     console.log(err)
// })

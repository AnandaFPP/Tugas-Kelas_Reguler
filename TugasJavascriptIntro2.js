// Nomor 1
// 1. Method .sort() = untuk mengurutkan elemen dari array. 
// let arr1 = ["zulkifli","andi","erik","joko","dina"];
// arr1.sort();
// console.log(arr1);              //hasil: [ 'andi', 'dina', 'erik', 'joko', 'zulkifli' ]

// 2. Method .concat() = untuk penyambungan array.
// let arr1 = ["a","b","c","d"];

// let arr2=arr1.concat(11,22,33,44);
// console.log(arr2);           //hasil: ['a','b','c','d',11,22,33,44]

// 3. Method .slice() = memotong array menjadi array baru.
// let arr1 = [1,2,3,4,"a","b","c","d"];
  
// //slice dari index ke 2 sampai 4
// let arr2 = arr1.slice(2,4)
// console.log(arr2);         //hasil: [3, 4]

// 4. Method .push() = menambahkan elemen dari array
// let arr1 = [];
  
// arr1.push("a","b","c");
// console.log(arr1);          //hasil: [a, b, c]

// 5. Method .pop() = mengurangi elemen dari array
// let arr1 = ["a", "b", "c"]

// arr1.pop();
// console.log(arr1);   // hasil: [a, b]

// 6. Method .unshift() = menambahkan elemen dari awal array
// let arr1 = ["a", "b", "c"];
  
// arr1.unshift("d");
// console.log(arr1);      //hasil: [d, a, b, c]

// 7. Method .shift() = mengurangi elemen dari awal array
// let arr1 = ["a", "b", "c"];

// arr1.shift();
// console.log(arr1);          //hasil: [b, c]

// 8. Method .toString() = mengkonversi array menjadi string
// let arr1 = [1,2,3,"a","b","c"];

// console.log(arr1.toString());           // hasil: 1,2,3,a,b,c

// 9. Method .includes = mengecek apakah sebuah data ada didalam array
// let fruits = ["Apple", "Banana", "Grape", "Cucumber"];

// let checkFruits = fruits.includes("Cucumber");
// console.log(checkFruits);                  //hasil: true

// 10. Method .indexOf() = mencari letak sebuah data didalam array
// let fruits = ['apple', 'banana', 'cherry']

// let checkfruits1 = fruits.indexOf('apple')          //hasil: 0
// let checkfruits2 = fruits.indexOf('Pineapple')      //hasil: -1
// console.log(checkfruits1)
// console.log(checkfruits2)
// fruits.indexOf('mango') 

// Nomor 2

const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

const searchName = (str, index, callback) => {
    try {
        if (!str) {
            throw 'Input tidak boleh kosong!'
        }
        if (typeof str !== "string") {
            throw 'Input harus string!'
        }
        if (!index) {
            throw 'Index tidak boleh kosong!'
        }
        if (typeof index !== "number") {
            throw 'Index harus number!'
        }
        callback(str, index);
    } catch (err) {
        console.log(err)
    }
}

const filterName = (str, index) => {
    let result = [];

    // menggunakan method .map
    
    name.map((element) => {
        if (element.toLowerCase().includes(str.toLowerCase()) && result.length < index) {
                    result.push(element)
        }
    })

    // menggunakan looping for...of

    for (const element of name) {
        // console.log(element);
        // console.log(element.toLowerCase().includes(str.toLowerCase()));
        if (element.toLowerCase().includes(str.toLowerCase())) {
            result.push(element)
        }
        if (result.length === index) {
            break
        }
    }
    console.log(result)
}
searchName("an", 3, filterName);

// Nomor 3

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    try {
        if (nilaiAwal > nilaiAkhir) throw 'Nilai akhir harus lebih besar dari nilai awal'
        if (!Array.isArray(dataArray)) throw 'Data array harus berupa array'
        if (dataArray.length <= 5) throw 'Jumlah angka dalam dataArray harus lebih dari 5'
        seleksi(nilaiAwal, nilaiAkhir, dataArray)
    } catch (err) {
        console.log(err); 
    }
}

const seleksi = (nilaiAwal, nilaiAkhir, dataArray) => {
    let result = [];
    dataArray.map((num) => {
        if (nilaiAwal < num && num < nilaiAkhir) {
            result.push(num)
        }
    })
        if (result.length === 0) {
            throw 'Nilai tidak ditemukan'
    }
    result.sort((a, b) => a - b)
    console.log(result);
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17 , [2, 25, 4])
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
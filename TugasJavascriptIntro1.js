// Nomor 1

const biodata = {
    name : "Ananda Fadhilah Perkasa Putra",
    age : 22,
    hobbies : ["Gaming", "Football", "Coding"],
    isMarried : false,
    schoolList : [{
        name : "SD Muhammadiyah 10 Banjarmasin",
        yearIn : "2007",
        yearOut : "2012",
        major : null
    },
    {
        name : "SMP Negeri 6 Banjarmasin",
        yearIn : "2012",
        yearOut : "2014",
        major : null
    },
    {
        name : "SMA Negeri 2 Makassar",
        yearIn : "2014",
        yearOut : "2017",
        major : "IPA"
    },
    {
        name : "Universitas Muslim Indonesia",
        yearIn : "2017",
        yearOut : "2022",
        major : "Bachelor of Law"
    }],
    skills : [{
        skillName : "Coding",
        level : "Beginner"
    },
    {
        skillName : "Football",
        level : "Advanced"
    },
    {
        skillName : "Editing",
        level : "Beginner"
    }],
    interestInCoding : true
}



// Nomor 2

const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

let totalNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa)/ 4;

// Cara pakai if else

if (totalNilai >= 90) {
    console.log(`Rata-rata = ${totalNilai}`);
    console.log(`Grade = A`);
} else if (totalNilai >= 80 && totalNilai < 90) {
    console.log(`Rata-rata = ${totalNilai}`);
    console.log(`Grade = B`);
} else if (totalNilai >= 70 && totalNilai < 80) {
    console.log(`Rata-rata = ${totalNilai}`);
    console.log(`Grade = C`);
} else if (totalNilai >= 60 && totalNilai < 70) {
    console.log(`Rata-rata = ${totalNilai}`);
    console.log(`Grade = D`);
} else {
    console.log(`Rata-rata = ${totalNilai}`);
    console.log(`Grade = E`);
}

// console.log(totalNilai);

// Cara pakai ternary operator

let median = totalNilai >= 90 ? `Rata-rata ${totalNilai} \nGrade = A` :
            totalNilai >= 80 && totalNilai < 90 ?  `Rata-rata ${totalNilai} \nGrade = B` :
            totalNilai >= 70 && totalNilai < 80 ?  `Rata-rata ${totalNilai} \nGrade = C` :
            totalNilai >= 60 && totalNilai < 70 ?  `Rata-rata ${totalNilai} \nGrade = D` :
            `Rata-rata ${totalNilai} \nGrade = E`;

console.log(median);



// Nomor 3

const printSegitiga = 5;

if (typeof printSegitiga != 'number') {
    console.log('Data harus number!')
    }

for (let i = printSegitiga; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += j + ' ';
      }
      console.log(str)
    }



// Nomor 4

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

// Point a tentang spread operator

let newData = {
    ...data,
    name: "Ananda Fadhilah",
    email: "anandafpp14@gmail.com",
    hobby: "Ngoding"
}

console.log(newData);

// Point b tentang destructuring

const {street, city} = data.address

console.log(street);
console.log(city);
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

const mean = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
    if (typeof mtk !== 'number' || typeof bahasaIndonesia !== 'number' || typeof bahasaInggris !== 'number' || typeof ipa !== 'number') {
        console.log('Data is not a Number!')
        return
    }
    let meanNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    const grade =
        meanNilai >= 90 && meanNilai <= 100 ? "Grade = A" :
        meanNilai >= 80 && meanNilai <= 89 ? "Grade = B" :
        meanNilai >= 70 && meanNilai <= 79 ? "Grade = C" :
        meanNilai >= 60 && meanNilai <= 69 ? "Grade = D" :
        "Grade = E"
    
    const result = `Rata-rata = ${meanNilai}
    ${grade}`
    return result
}

let hasil = mean(80, 90, 89, 69)
console.log(hasil)


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

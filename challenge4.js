/**
 * Konversi Array ke Objek
 * 
 * Diberikan sebuah array yang berisi string, [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ] dan sebuah array berisi number, [4, 6, 6, 5]. 
 * Ubahlah array tersebut menjadi objek dengan kunci berupa nama buah dan nilai berupa panjang dari nama buah tersebut.
 */

let fruits = [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ] //key
let amount = [4, 6, 6, 5] //value

let object = {};

for (let i = 0; i < fruits.length; i++) {
    object[fruits[i]] = amount[i];
}

console.log(object);

// OUTPUT: { Apel: 4, Mangga: 6, Pisang: 6, Jeruk: 5 }


/**
 * Menghitung Kemunculan Kata
 * 
 * Diberikan sebuah kalimat, "saya suka makan nasi goreng dan saya juga suka minum teh". 
 * Buatlah sebuah objek yang menghitung berapa kali masing-masing kata muncul di dalam kalimat tersebut.
 */

let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh"

let sentence = favWord.split(' ')

let wordCount = {}

for (let word of sentence) {
    if (wordCount[word]) {
        wordCount[word]++;
    } 
    else {
        wordCount[word] = 1;
    }
}

console.log(wordCount);


// OUTPUT:  { saya: 2, suka: 2, makan: 1, nasi: 1, goreng: 1, dan: 1, juga: 1, minum: 1, teh: 1 }


/**
 * Grup Orang Berdasarkan Usia
 * 
 * Diberikan sebuah array objek yang berisi nama dan usia.
 * 1. Akses umur Dewi
 * 2. Kelompokkan objek didalam array berdasarkan usia, dan keluarkan dalam bentuk objek
 * 
 */

const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
  ]

let umurDewi;
let collectionUmur = {};

for (const person of people){
    if (person.nama === "Dewi") {
        umurDewi = person.usia;
        break; 
    }
}

for (const person of people){
    const { nama, usia } = person;
      
    if (!collectionUmur[usia]) {
        collectionUmur[usia] = [];
    }
  
    collectionUmur[usia].push({ nama, usia });
}
  
console.log("Umur Dewi:", umurDewi);
console.log("Kelompokkan berdasarkan usia:", collectionUmur);

// OUTPUT:
// {
//     20: [ { nama: 'Ana', usia: 20 } ],
//     25: [ { nama: 'Budi', usia: 25 }, { nama: 'Citra', usia: 25 } ],
//     30: [ { nama: 'Eka', usia: 30 } ],
//     32: [ { nama: 'Dewi', usia: 20 } ]
// }


/**
 * Mengakses Properti Bertingkat
 * 
 * Diberikan sebuah objek bertingkat. Akses value dar key city
 */

console.log("");

const data = {
    user: {
        profile: {
            name: "John Doe",
            address: {
                city: "Jakarta",
                postalCode: "12345"
            }
        }
    }
};

let result = data.user.profile.address.city
console.log(result);


/**
 * Penghitungan Suara Pemilihan
 * 
 * Terdapat sebuah array berisi suara pemilihan. Hitunglah total suara untuk masing-masing kandidat dan kembalikan dalam bentuk objek.
 */

const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 'Dewi', 'Ana'];

const hasil = {}

    for (const kandidat of suara) {
        if (hasil[kandidat]) {
            hasil[kandidat]++;
        } 
        else {
            hasil[kandidat] = 1;
        }
    }

console.log(hasil);

// OUTPUT :
// { Budi: 3, Ana: 3, Citra: 1, Dewi: 2 }



/**
 * Menggabungkan Beberapa Objek
 * 
 * Terdapat beberapa objek dengan struktur yang sama. 
 * Gabungkan objek-objek tersebut sehingga setiap kunci memiliki nilai yang merupakan total dari ketiga objek tersebut.
 */

const obj1 = { a: 5, b: 7, c: 3 };
const obj2 = { a: 4, b: 1, c: 8 };
const obj3 = { a: 9, b: 2, c: 5 };

function combineObjects(...objects) {
    const combined = {};

    objects.forEach(obj => {
        for (const key in obj) {
            if (combined.hasOwnProperty(key)) {
                combined[key] += obj[key];
            } else {
                combined[key] = obj[key];
            }
        }
    });

    return combined;
}

const combinedObj = combineObjects(obj1, obj2, obj3);
console.log(combinedObj);

// OUTPUT:
// { a: 18, b: 10, c: 16 }


/**
 * Penyusunan Ulang Objek
 * 
 * Diberikan sebuah objek. Susun ulang objek tersebut agar semua informasi ada di tingkat yang sama,
 * tetapi namai kunci dengan kombinasi informasi yang mereka wakili
 */

const orang = {
    nama: "Budi",
    alamat: {
        jalan: "Jl. Raya",
        kota: "Jakarta",
        kodePos: "10000"
    },
    kontak: {
        email: "budi@mail.com",
        telepon: "080080080"
    }
};

function flattenObject(obj, parentKey = '') {
    const result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}_${key}` : key;

            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                const flattened = flattenObject(obj[key], newKey);
                for (const flattenedKey in flattened) {
                    if (flattened.hasOwnProperty(flattenedKey)) {
                        result[flattenedKey] = flattened[flattenedKey];
                    }
                }
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

const flattenedOrang = flattenObject(orang);
console.log(flattenedOrang);

// OUTPUT
// {
//   nama: "Budi",
//   alamat_jalan: "Jl. Raya",
//   alamat_kota: "Jakarta",
//   alamat_kodePos: "10000",
//   kontak_email: "budi@mail.com",
//   kontak_telepon: "080080080"
// }


/**
 * Mencari Nilai Tertinggi dan tampilkan nama dan nilainya
 * 
 * Gunakan looping untuk mencarinya. Lalu resultnya menjadi string dengan pernyataan
 */

const mahasiswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ana", nilai: 90 },
    { nama: "Dono", nilai: 78 },
    { nama: "Dewi", nilai: 92 }
];

let maxNilai = 0;
let mahasiswaTeringgi = null;

for (const data of mahasiswa) {
    if (data.nilai > maxNilai) {
        maxNilai = data.nilai;
        mahasiswaTeringgi = data;
    }
}

if (mahasiswaTeringgi) {
    console.log(`Mahasiswa yang mendapatkan nilai tertinggi adalah ${mahasiswaTeringgi.nama} dengan nilai ${mahasiswaTeringgi.nilai}`);
} else {
    console.log("Belajar lagi sana");
}

// OUPUT: Students yang mendapatkan nilai terbesar adalah ... dengan nilai ...
  

/**
 * Konversi Objek ke Array
 * 
 * Rubah objek menjadi array dengan metode looping yang dimana akan dinamis.
 */

const kota = {
    Jakarta: 10,
    Bandung: 5,
    Surabaya: 7,
    Medan: 4
};

const objectToArray = [];

for (const namaKota in kota){
    const nilai = kota[namaKota];
    objectToArray.push({ namaKota, nilai});
}

console.log(objectToArray);

// OUTPUT:
// [
//   { namaKota: "Jakarta", nilai: 10 },
//   ...
// ]
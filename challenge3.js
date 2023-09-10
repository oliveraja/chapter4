/**
 * Hapus item terkhir
 * 
 * let fruits = ['apple', 'banana', 'cherry']
 */

let fruits = ['apple', 'banana', 'cherry']
fruits.pop()
console.log(fruits);
// Output: ['apple', 'banana']


/**
 * Cari panjang array
 * 
 * Diberikan sebuah array ['a', 'b', 'c', 'd', 'e']. Tentukan panjang dari array tersebut.
 */

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e']
console.log(bulkAlphabet.length);
// Output: 5


/**
 * Cari nilai tertinggi dan terendah
 * 
 * Terdapat array [21, 19, 10, 89, 3, 20, 33, 34], tentukan nilai tertinggi dan nilai terendah. 
 * Setelah itu urutkan array tersebut tanpa menggunakan built in function
 */
let angkaRandom = [21, 19, 10, 89, 3, 20, 33, 34]

let min = angkaRandom [0];
let max = angkaRandom [0];

for (let i = 1; i < angkaRandom.length; i++){
    if (angkaRandom[i] > max){
        max = angkaRandom[i];
    }
    if (angkaRandom[i] < min){
        min = angkaRandom[i];
    }
}

console.log("Nilai Tertinggi : ", max);
console.log("Nilai Terendah : ", min);


/**
 * Gabungkan Dua Array, berikut dengan ketentuan:
 * 1. Menggunakan built in function
 * 2. Tidak menggunakan built in function
 * 
 * [1, 2, 3] dan [4, 5, 6]
 */
let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
let result1 = arr1.concat(arr2)
console.log(result1);

let gabung = []

for (let i = 0; i < arr1.length; i++){
    gabung.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++){
    gabung.push(arr2[i])
}

console.log(gabung);
// Output : [1, 2, 3, 4, 5, 6]


/**
 * Filter huruf ganjil
 * 
 * Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
 * Buatlah sebuah array baru yang hanya berisi angka ganjil dari array tersebut.
 * 
 * Ketentuan tanpa menggunakan built in function
 */
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaGanjil = []

for (let i = 0; i < arr3.length; i++){
    if(arr3[i] % 2 !== 0){
        angkaGanjil.push(arr3[i])
    }
}
console.log(angkaGanjil); // [1, 3, 5, 7, 9]


/**
 * Susun ulang array
 * 
 * Diberikan array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]. 
 * Urutkan array ini dari yang terkecil ke terbesar, kemudian balikkan urutannya. 
 * Setelah itu, hapus angka yang sama sehingga setiap angka hanya muncul sekali.
 * 
 * Bisa menggunakan built in function. Kisi2 sebagai berikut:
 * 1. Urutkan array terlebih dahulu
 * 2. Balik urutan array tersebut
 * 3. Hapus angka yang duplikat
 */

let angkaKumupulan =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

angkaKumupulan.sort(); //Urutkan array terlebih dahulu

angkaKumupulan.reverse(); //Balik urutan array tersebut

let newAngkaKumpulan = [];
for (let i = 0; i < angkaKumupulan.length; i++){
    if (newAngkaKumpulan.indexOf(angkaKumupulan[i]) === -1){
        newAngkaKumpulan.push(angkaKumupulan[i]);
    }
}

console.log(newAngkaKumpulan);
// Output : [9, 6, 5, 4, 3, 2, 1]


/**
 * Menggabungkan Array dengan Spesifik
 * Memiliki dua array, arr1 = [1, 2, 3] dan arr2 = ['a', 'b', 'c']. 
 * Gabungkan kedua array tersebut sehingga mendapatkan hasil ['a', 1, 'b', 2, 'c', 3].
 */

let kumpulanAngka = [1, 2, 3]
let kumpulanHuruf = ["a", "b", "c", "d"]

let combine = [];

for (let i = 0; i < Math.max(kumpulanAngka.length, kumpulanHuruf.length); i++){
    if (i < kumpulanHuruf.length) {
        combine.push(kumpulanHuruf[i]);
    }
    if (i < kumpulanAngka.length) {
        combine.push(kumpulanAngka[i]);
    }
}

console.log(combine);
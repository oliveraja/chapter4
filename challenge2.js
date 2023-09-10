for(let i = 2; i <= 20; i += 2){
    console.log(i);
}

//Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100.
let total = 0;

for (let i = 1; i <= 100; i++){
    total += i;
}

console.log(total);

//Pola Segitiga Naik
//Tampilkan pola segitiga asteriks sebagai berikut untuk n = 5
let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
        pattern += "*";
        if (j < 1){
            pattern += "\n";
        }
    }
    if (i < n){
        pattern += "\n";
    }
}
console.log(pattern);

// Tampilkan pola segitiga asteriks terbalik sebagai berikut untuk n = 5.
let x = 5;
let star = "";

for (let i = x; i >= 1; i--){
    for (let j = 1; j <= i; j++){
        star += "*";
    }
    if (i > 1){
        star += "\n";
    }
}
console.log(star);

// Pola Berlian
// Tampilkan pola segitiga asteriks berlian sebagai berikut untuk n = 5. 
let diamond = 5;

for (let i = 1; i <= diamond; i++) {
    let row = '';

    for (let j = 1; j <= diamond - i; j++) {
        row += ' ';
    }

    // Menambahkan asterisk
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
    }

    console.log(row);
}

for (let i = diamond - 1; i >= 1; i--) {
    let row = '';

    // Membuat spasi di awal baris
    for (let j = 1; j <= diamond - i; j++) {
        row += ' ';
    }

    // Menambahkan asterisk
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
    }

    console.log(row);
}

//Pola Segitiga Bilangan
//Tampilkan pola segitiga dengan angka dengan asteriks sebagai pemisah:

let y = 5;

for (let i = 1; i <= y; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
        if (j < i) {
            row += '*';
        }
    }
    console.log(row);
}
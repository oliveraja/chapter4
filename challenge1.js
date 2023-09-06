
console.log("====================== Soal 1 ======================");

function ageCategory(age){
    if(isNaN(age)){
        return "Masukin Angka!!!";
    }
    else if(age >= 0 && age <= 12){
        return "Anak-anak";
    }
    else if(age >= 13 && age <= 19){
        return "Remaja";
    }
    else if(age >= 20 && age <= 35){
        return "Dewasa";
    }
    else{
        return "Lanjut Usia";
    }
}

let age = 17;
console.log(`Usia anda ${age} => ${ageCategory(age)}`);

console.log("");

console.log(ageCategory(12));
console.log(ageCategory(17));
console.log(ageCategory(35));
console.log(ageCategory(55));
console.log(ageCategory("four four"));

console.log("");
console.log("====================== Soal 2 ======================");

function parkingCost(parkingTime, parkingDay, nasionalDay){
    let startfromFee = 10000;
    let feeHour = 5000;
    let discount = 0;
    let addtionalFee = 0;

    if(parkingTime > 1){
        startfromFee += (parkingTime - 1) * feeHour
        
        if(parkingTime > 5){
            discount = 10000;
        }
    }

    if(parkingDay.toLowerCase() === "minggu"){
        addtionalFee = 5000;
    }

    if(nasionalDay){
        if (startfromFee + addtionalFee - discount > 30000){
            return startfromFee + addtionalFee - discount - 7000;
        }
    }
    return startfromFee + addtionalFee - discount;
}

let parkingTime = 2;
let parkingDay = "Sabtu";
let nasionalDay = false;

let parkingCostTotal = parkingCost(parkingTime, parkingDay, nasionalDay);
console.log(`Total Biaya Parkir Anda : ${parkingCostTotal}`);

console.log("");
console.log("====================== Soal 3 ======================");

function jadwalFestival(hari, cuaca, suhu, angin) {
    let acara = "Daftar Acara: Pameran Seni";

    if(cuaca === "Hujan" && angin > 20) {
        return acara;
    }

    if(cuaca === "Hujan" && angin < 20) {
        acara += ", Acara dipindah ke dalam ruangan";
    }

    if(suhu < 5) {
        return "Daftar Acara: Acara Indoor";
    }

    if(cuaca === "Cerah" && suhu > 25) {
        acara += ", Pesta Es Krim";
    }

    if(hari === "Minggu" && cuaca === "Cerah") {
        acara += ", Maraton Senja";
    }

    return acara + "."
}

console.log(jadwalFestival('Sabtu', 'Hujan', 23, 30));
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 10));
console.log(jadwalFestival('Minggu', 'Cerah', 27, 8));
const arr = []
for (let i = 0; i < 100; i ++) {
    const randomNumb = Math.ceil((Math.random() * 50) + 1);
    arr.push(randomNumb)
}
console.log(arr);

const randomNumber = Math.random() * 50;
console.log(randomNumber); // Output: angka acak antara 0 (inklusif) dan 1 (eksklusif)


// Definisikan fungsi generateRandomValue dengan parameter min dan max
function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Buat array dan isi dengan angka acak
const randomArray = [];
for (let i = 0; i < 100; i++) {
    randomArray.push(generateRandomValue(1, 50));
}

// Tampilkan array yang dihasilkan di konsol
console.log(randomArray);

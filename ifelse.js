// Fungsi untuk menghasilkan nilai acak antara min dan max
function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk menghitung total nilai dalam array
function calculateTotal(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

// Fungsi untuk menghitung rata-rata nilai dalam array
function calculateAverage(array) {
    return calculateTotal(array) / array.length;
}

// Fungsi untuk mencari nilai minimum dalam array
function findMin(array) {
    let min = array[0];
    for (let value of array) {
        if (value < min) {
            min = value;
        }
    }
    return min;
}

// Fungsi untuk mencari nilai maksimum dalam array
function findMax(array) {
    let max = array[0];
    for (let value of array) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}

// Generate array dengan nilai acak
const randomArray = [];
for (let i = 0; i < 100; i++) {
    randomArray.push(generateRandomValue(1, 50));
}

// Membagi array menjadi array genap dan ganjil
const evenArray = [];
const oddArray = [];
for (let i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
        evenArray.push(randomArray[i]);
    } else {
        oddArray.push(randomArray[i]);
    }
}

// Menghitung statistik untuk array genap dan ganjil
const evenTotal = calculateTotal(evenArray);
const evenAverage = calculateAverage(evenArray);
const evenMin = findMin(evenArray);
const evenMax = findMax(evenArray);

const oddTotal = calculateTotal(oddArray);
const oddAverage = calculateAverage(oddArray);
const oddMin = findMin(oddArray);
const oddMax = findMax(oddArray);

// Membandingkan nilai statistik antara array genap dan ganjil
const comparisonMin = evenMin > oddMin ? 'Min lebih besar array genap' : 'Min lebih besar array ganjil';
const comparisonMax = evenMax > oddMax ? 'Max lebih besar array genap' : 'Max lebih besar array ganjil';
const comparisonTotal = evenTotal === oddTotal ? 'Total memiliki nilai sama antara array genap dan ganjil' : 'Total tidak memiliki nilai sama antara array genap dan ganjil';
const comparisonAverage = evenAverage > oddAverage ? 'Rata-rata lebih besar array genap' : 'Rata-rata lebih besar array ganjil';

// Menampilkan hasil
console.log('Array:', randomArray);
console.log('Array Genap:', evenArray);
console.log('Array Ganjil:', oddArray);
console.log('Min dan Max Array Genap:', evenMin, evenMax);
console.log('Min dan Max Array Ganjil:', oddMin, oddMax);
console.log('Total Array Genap:', evenTotal);
console.log('Total Array Ganjil:', oddTotal);
console.log('Rata-rata Array Genap:', evenAverage);
console.log('Rata-rata Array Ganjil:', oddAverage);
console.log(comparisonMin);
console.log(comparisonMax);
console.log(comparisonTotal);
console.log(comparisonAverage);

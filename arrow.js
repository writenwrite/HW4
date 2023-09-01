const analyzeRandomArray = () => {
    const generateRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const calculateTotal = array => array.reduce((total, value) => total + value, 0);
    const calculateAverage = array => calculateTotal(array) / array.length;
    const findMin = array => Math.min(...array);
    const findMax = array => Math.max(...array);

    const randomArray = Array.from({ length: 100 }, () => generateRandomValue(1, 50));

    const evenArray = randomArray.filter((_, index) => index % 2 === 0);
    const oddArray = randomArray.filter((_, index) => index % 2 !== 0);

    const analyzeArray = array => ({
        total: calculateTotal(array),
        average: calculateAverage(array),
        min: findMin(array),
        max: findMax(array)
    });

    const evenAnalysis = analyzeArray(evenArray);
    const oddAnalysis = analyzeArray(oddArray);

    const comparisonMin = evenAnalysis.min > oddAnalysis.min ? 'Min lebih besar array genap' : 'Min lebih besar array ganjil';
    const comparisonMax = evenAnalysis.max > oddAnalysis.max ? 'Max lebih besar array genap' : 'Max lebih besar array ganjil';
    const comparisonTotal = evenAnalysis.total === oddAnalysis.total ? 'Total memiliki nilai sama antara array genap dan ganjil' : 'Total tidak memiliki nilai sama antara array genap dan ganjil';
    const comparisonAverage = evenAnalysis.average > oddAnalysis.average ? 'Rata-rata lebih besar array genap' : 'Rata-rata lebih besar array ganjil';

    return {
        randomArray,
        evenArray,
        oddArray,
        evenAnalysis,
        oddAnalysis,
        comparisonMin,
        comparisonMax,
        comparisonTotal,
        comparisonAverage
    };
};

const analysisResult = analyzeRandomArray();
console.log(analysisResult);

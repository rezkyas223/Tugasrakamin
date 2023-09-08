// Fungsi untuk membuat array dengan 100 nilai acak antara 1 sampai 50
function createRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * 50) + 1);
    }
    return randomArray;
  }
  
  // Fungsi untuk memecah array menjadi dua berdasarkan indeksnya (genap dan ganjil)
  function splitArrayByIndex(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  // Fungsi untuk menghitung nilai minimum dari sebuah array
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum dari sebuah array
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total dari sebuah array
  function findTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata dari sebuah array
  function findAverage(arr) {
    const total = findTotal(arr);
    return total / arr.length;
  }
  
  // Fungsi untuk membandingkan dua array
  function compareArrays(arr1, arr2) {
    const minComparison = findMin(arr1) > findMin(arr2)
      ? "Min lebih besar array genap"
      : "Min lebih besar array ganjil";
  
    const maxComparison = findMax(arr1) > findMax(arr2)
      ? "Max lebih besar array genap"
      : "Max lebih besar array ganjil";
  
    const totalComparison = findTotal(arr1) === findTotal(arr2)
      ? "Total memiliki nilai sama antara array genap dan ganjil"
      : "Total berbeda antara array genap dan ganjil";
  
    const averageComparison = findAverage(arr1) > findAverage(arr2)
      ? "Rata-rata lebih besar array genap"
      : "Rata-rata lebih besar array ganjil";
  
    console.log("Array dengan jumlah index 100:", arr1.concat(arr2));
    console.log("Array genap dengan jumlah index 50:", arr1);
    console.log("Array ganjil dengan jumlah index 50:", arr2);
    console.log("Min pada array genap:", findMin(arr1));
    console.log("Max pada array genap:", findMax(arr1));
    console.log("Total pada array genap:", findTotal(arr1));
    console.log("Rata-rata pada array genap:", findAverage(arr1));
    console.log("Min pada array ganjil:", findMin(arr2));
    console.log("Max pada array ganjil:", findMax(arr2));
    console.log("Total pada array ganjil:", findTotal(arr2));
    console.log("Rata-rata pada array ganjil:", findAverage(arr2));
    console.log(minComparison);
    console.log(maxComparison);
    console.log(totalComparison);
    console.log(averageComparison);
  }
  
  const randomArray = createRandomArray(100);
  const [evenArray, oddArray] = splitArrayByIndex(randomArray);
  compareArrays(evenArray, oddArray);
  
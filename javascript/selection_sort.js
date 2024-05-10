function selectionSort(arr) {
  // type your code here
  const min = {
    index: -1,
    value: 0
  }
  for (let i = 0; i < arr.length - 1; i++) {
    min.index = i;
    min.value = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const minValue = Math.min(min.value, arr[j]);
      if (minValue === arr[j] && minValue != min.value) {
        min.index = j;
        min.value = minValue;
      }
    }
    if (min.index !== i) {
      const temp = arr[i];
      arr[i] = arr[min.index];
      arr[min.index] = temp;
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [-94,-50, -40, -39, -29, -10, 6, 55, 71, 84]");
  console.log("=>", selectionSort([84, -10, 55, -29, -40, -50, -94, -39, 71, 6]));

  console.log("Expecting: [-42, -27, -22, -10, 3, 3, 25, 43, 63, 86]");
  console.log("=>", selectionSort([3, 3, -42, 63, -10, -22, 25, 86, -27, 43]));

  // BENCHMARK HERE, and print the average runtime
  const shortInput = [];
  const longInput = [];

  for (let i = 0; i < 3; ++i) {
    shortInput.push(Math.random());
  }

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  //console.log(`Short Input: ${shortInput} sorted to => ${selectionSort(shortInput)}`);
  //console.log(`Long Input: ${longInput} sorted to => ${selectionSort(longInput)}`);

  const startTime = performance.now();
  for (let i = 0; i < 1000; i++) {
    selectionSort(shortInput);
    selectionSort(longInput);
  }
  const endTime = performance.now();
  const averageRunTime = (endTime - startTime) / 2000;
  console.log(`Selection sort simulation took ${averageRunTime} ms on average.`);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
//1. Sort array by continuously swapping the current indexed element with the min value among the rest of the elements.
//2. Understood
//3. Tests added
//4. Psuedocode
/**
 * function selectionSort(arr) {
 *  for n of arr {
 *    min = n
 *    index = n.index
 *    for e of arr(1:len - 1) {
 *      min = min(min, e)
 *      index = e.index
 *    }
 *    if (index !== n.index) {
 *      temp = n
 *      arr[n.index] = arr[index]
 *      arr[index] = temp
 *    }
 *  }
 *  return arr
 * }
 */
// 5. Code
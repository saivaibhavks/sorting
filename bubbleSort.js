const arr = [50, 42, 231, 23, -21, 0, 342];

const swap = (a, b) => {
  let temp;
  temp = a;
  a = b;
  b = temp;
};

const bubbleSort = (arr) => {
  console.log("arr", arr);
  console.log("arr", arr);
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log("arr", arr);
};

bubbleSort(arr);

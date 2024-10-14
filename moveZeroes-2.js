const arr = [1, 2, 4, 0, 3, 12321, 4, 0, 0, 2, 3, 1, 0, 3, 2];

const moveZeroes = (arr) => {
  console.log("arr", arr);
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }

  let i = j + 1;

  for (let k = j; k < arr.length; k++) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

console.log("aaa", moveZeroes(arr));

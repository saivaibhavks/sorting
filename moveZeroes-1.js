const arr = [1, 2, 4, 0, 3, 12321, 4, 0, 0, 2, 3, 1, 0, 3, 2];

const moveZeroes = (arr) => {
  let temp = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      temp[j] = arr[i];
      j++;
    }
  }
  console.log("aaa", temp);

  for (let i = j; i < arr.length; i++) {
    temp[i] = 0;
  }

  return temp;
};

console.log("aaa", moveZeroes(arr));

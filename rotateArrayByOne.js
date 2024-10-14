const arr = [132, 2, 3, 4, 5, 44];

const rortateOne = (arr) => {
  let temp = arr[0];
  arr[0] = arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

console.log("New Array", rortateOne(arr));

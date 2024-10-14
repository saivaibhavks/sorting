const arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
const arr2 = [2, 3, 3, 4, 5, 6, 6];

const union = (arr1, arr2) => {
  let temp = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (temp.length == 0 || temp[temp.length - 1] != arr1[i]) {
        temp.push(arr1[i]);
      }
      i++;
    } else {
      if (temp.length == 0 || temp[temp.length - 1] != arr2[j]) {
        temp.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < arr1.length) {
    if (temp[temp.length - 1] != arr1[i]) {
      temp.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (temp[temp.length - 1] != arr2[j]) {
      temp.push(arr2[j]);
    }
    j++;
  }
  return temp;
};

console.log("Union array is", union(arr1, arr2));

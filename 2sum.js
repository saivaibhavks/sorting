const arr = [1, 2, 3, 45, 21, 4];

let target = 437;

function check(arr, target) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    // use i < j because i == j shouldn't be considered
    const sum = arr[i] + arr[j];

    if (sum === target) {
      return true; // Return immediately when a pair is found
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return false; // Return false if no pair is found
}

console.log("arr", check(arr, target)); // Now it will print true or false

const array = [1, 2, 3, 4, 5];
for (let value of array) {
  if (value === 3) {
    break;
  }
  console.log(value);
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let value of array2) {
  if (value % 2 === 0) {
    continue;
  }
  console.log(value);
}

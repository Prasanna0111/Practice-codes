// using array
const array = [1, 2, 3, 4, 5];
for (let i in array) {
  console.log(array[i]);
}

// using object
const person = {
  name: "Prasanna",
  age: 24,
};

for (let i in person) {
  console.log(`${i} : ${person[i]}`);
}

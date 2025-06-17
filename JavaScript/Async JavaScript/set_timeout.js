console.log("start");

const timeOut = setTimeout(() => {
  console.log("timeout callback executed");
}, 5000);
console.log("end");
clearTimeout(timeOut);

let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("This message is logged every 2 seconds");
  if (count === 10) {
    console.log("Stopping the interval after 10 iterations");
    clearInterval(interval);
  }
}, 2000);

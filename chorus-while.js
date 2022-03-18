// excerise 1
/*
const chorus = "Let's dance!";
let repeat = 0; // this is the start

while (repeat < 10) { // this is the stop
  console.log(chorus); // this will run until the 'stop' is false
  repeat++; // this is the steps the code will take
}
console.log("Until the sun comes up!");
*/
// exercise 2
const chorus = "Let's dance!";
let repeat = 0;

while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
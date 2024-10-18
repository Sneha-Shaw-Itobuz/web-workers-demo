const increaseButton = document.querySelector(".increase");
const resetButton = document.querySelector(".reset");
const getSumButton = document.querySelector(".get-sum");
const countAnsText = document.querySelector(".count-ans");
const sumAnsText = document.querySelector(".sum-ans");

let count = 0;

// increment count
increaseButton.addEventListener("click", () => {
  count += 1;
  countAnsText.textContent = count;
});

// reset all values
resetButton.addEventListener("click", () => {
  count = 0;
  countAnsText.textContent = count;
  sumAnsText.textContent = 0;
});

// <-------------- Without Worker------------->

getSumButton.addEventListener("click", () => {
  let total = 0;
  for (let i = 0; i < 3000000000; i++) {
    total += i;
  }
  sumAnsText.textContent = total;
});

// <-------------- With Worker------------->

const worker = new Worker("worker.js");

// getSumButton.addEventListener("click", () => {
//   worker.postMessage("start");
//   worker.onmessage = (e) => {
//     sumAnsText.textContent = e.data;
//   };
//   worker.onmessageerror = (e) => {
//     console.log(e.data);
//   };
// });

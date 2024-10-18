onmessage = () => {
  let total = 0;
  for (let i = 0; i < 3000000000; i++) {
    total += i;
  }
  postMessage(total);
};

console.log(this);

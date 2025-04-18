const logItems = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

console.log(logItems(9))

{/*

Here we are using loop inside loop that means time complexity => O(n^2)

*/}
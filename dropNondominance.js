const dropNonDominance = (n) => {
  //time complexity of O(n^2)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }

  // time complexity of O(n)
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
};

{
  /* 
  here we are using two loops 
  one have => O(n^2)
  other have => O(n)

  time complexity becomes => O(n^2) + O(n)

  but we can drop non dominance factor, here O(n) is very small infront of O(n^2)
  so we can drop it and our time complexity becomes => O(n^2)
  */
}

const logItems = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

logItems(9)



{ /*
  there are theree types of time complexity
 - omega -ideal time complexity 
 - theta - average time complexity
 - big O - worst time complexity

 we always consider the worst time complexity that bog O
- Running the single loop has time complexity of O(n)

- becuase if you want to find a number in the array and that number is at the 
last position then you have to iterate thorough the whole array and at the end
you will find out that number , that why we consider only bog O
 */}


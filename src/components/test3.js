//
// const fib = (n) => {
//   let a = 1;
//   let b = 1;
//   let c = null;
//
//   for (let i = 0; i < n; i++) {
//     a = b;
//     b = c;
//
//     c = a + b;
//
//     console.log(c);
//   }
// };

const fib = (n) => {

  const arr = [1, 1];

  for (let i = 0; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  console.log(arr);
};


fib(100);

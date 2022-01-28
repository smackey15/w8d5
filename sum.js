// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// }

// function sum(...args) {
//   let sum = 0
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i]
//   }
//   return sum
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(...args) {
  let sum = 0
  args.forEach(el => {
    sum += el
  })
  return sum
}
console.log(sum(1, 2, 3, 4, 5));

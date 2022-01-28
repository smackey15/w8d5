function curriedSum(num) {
  let numbers = [];
  
  return function _curriedSum(n) {
    numbers.push(n);
    if (numbers.length === num) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  }
}

let f1 = curriedSum(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
console.log(f1 = f1(4)); // [Function]
console.log(f1 = f1(20)); // [Function]
console.log(f1 = f1(6)); // = 30


// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// // sumThree(4, 20, 6); // == 30
// f2 = sumThree.curry(3);
// console.log(f2 = f2(4)); // [Function]
// console.log(f2 = f2(20)); // [Function]
// console.log(f2 = f2(6)); // = 30


// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30


// Function.prototype.curry = function(numArgs) {
//   let args = [];
//   let that = this;

//   return function _curry() {
//     args = args.concat(Object.values(arguments));
//     if (args.length >= numArgs) {
//       return that.apply(that, args)
//     } else {
//       return _curry
//     }
//   }
// }

Function.prototype.curry = function (numArgs) {
  let args = [];
  let that = this;

  return function _curry(...args2) {
    args = args.concat(args2);
    if (args.length >= numArgs) {
      return that(...args);
    } else {
      return _curry
    }
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

f2 = sumThree.curry(3);
console.log(f2 = f2(4)); // [Function]
console.log(f2 = f2(20)); // [Function]
console.log(f2 = f2(6)); // = 30


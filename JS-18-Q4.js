/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/


const fun = new Promise(function (resolve, reject) {
  setTimeout(() => {
    function sum(num1, num2) {
      if (num1 < 0 || num2 < 0) {
        reject('Enter positive numbers.')
      }
      else {
        resolve(num1 + num2)
      }
    }
    sum(3, 5)
  }, 500)

})
fun.then((result) => {
console.log(`sum number: ${result}`);
}).catch((result) => {
console.log(result);
})

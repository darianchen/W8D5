function sum1 () {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

function sum2 (...theArgs) {

  let total = 0
  for (let i = 0; i < theArgs.length; i++) {
    total += theArgs[i]
  }
  return total
}

console.log(sum1(200, 500, 1000))
console.log(sum2(200, 500, 1000))
function curriedSum(numArgs) {
    let numbers = [];
    return function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs){
            let total = numbers.reduce(function(acc,el){
                return acc + el;
            }, 0)
            return total
        } else { 
            return _curriedSum;
        }

    }

}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));


Function.prototype.curry = function(numArgs){
    let numbers = []
    let originalFunc = this
    return function _curry(num){
        numbers.push(num)
        if (numbers.length === numArgs){
            return originalFunc.apply(null, numbers)
        } else {
            return _curry
        }
    
    }
}

function sumNums(...numbers){
    let total = 0;
    console.log(this)
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total
}

let ford = sumNums.curry(5)
let hi = ford(1)(100)(5)(4)(5)
console.log(hi)
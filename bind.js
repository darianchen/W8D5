// Function.prototype.myBind = function () {
//   let that = this
//   let other = arguments;
//   return function () { 
//     that.apply(other[0], [other[1], other[2]])
//   };
// }

Function.prototype.myBind = function (...args) {
  let that = this;
  return function (...secondArgs) {
    if (args.length === 1) {
      return that.apply(args[0], secondArgs)
    } else if (args.length === 2) {
      return that.apply(args[0], [args[1], secondArgs[0]])
    } else if (args.length === 3) {
      return that.apply(args[0], [args[1], args[2]])
    }
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
markov.says.myBind(pavlov)('hi', 'fred');  //args length 1
markov.says.myBind(pavlov, 'hi')('fred');  //args length 2
markov.says.myBind(pavlov, 'hi', 'fred')();  //args length 3

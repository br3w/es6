/**
* Arrow Functions ES6
* -----------------------
* @author Jonas Andrade
* @since 20/06/2015
*/



/*
Arrow functions
-------------------------------------------------------------------
As arrow functions a princípio podem parecer confusas mas depois de 
um tempo, é possível entender sua sintaxe mais curta e a mágica do 
escopo do this.
*/


/* Sem arrow functions */
var oldWay = function(name, nickname) {
    return 'My name is ' + nickname + ', ' + name;
};
console.log( oldWay('James Bond', 'Bond') );


/* Com arrow functions */
let newWay = (name, nickname) => {
    return 'My name is ' + nickname + ', ' + name;
};
console.log( newWay('James Bond', 'Bond') );


/* Arrow functions mais curta */
let newWay2 = (name, nickname) => 'My name is ' + nickname + ', ' + name;
console.log( newWay2('James Bond', 'Bond') );



/* 
    Googles samples
*/


// Filter an array for only odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Before Arrow Functions
let es5OddNumbers = numbers.filter(function(number) {
    return number % 2;
});
console.log(es5OddNumbers);

// After Arrow Functions
let es6OddNumbers = numbers.filter(number => number % 2);
console.log(es6OddNumbers);



// Parens are optional depending on the number of arguments:
let square = x => x * x;
console.log(square(10));

let add = (a, b) => a + b;
console.log(add(3, 4));



// `return` is implied if using an expression after an arrow.
let developers = [{name: 'Rob'}, {name: 'Jake'}];

// Before...
let es5Output = developers.map(function(developer) {
    return developer.name;
});
console.log(es5Output);

// After...
let es6Output = developers.map(developer => developer.name);
console.log(es6Output);

// Fat arrows change how `this` is handled.

// Before...
// In ES5, `bind()` or var that = this; are necessary as functions
// create their own `this`. We need to store the parent `this` in
// a variable that can be referenced in the callback or take care
// of binding ourselves.
function CounterES5() {
    this.seconds = 0;
    window.setInterval(function() {
        this.seconds++;
    }.bind(this), 1000); // or }.bind(this), 1000) and skip that = this
}

var counterA = new CounterES5();
window.setTimeout(function() {
    console.log(counterA.seconds);
}, 1200);

// After...
// ES6 Arrows instead bind `this` to the immediate enclosing
// lexical scope:
function CounterES6() {
    this.seconds = 0;
    window.setInterval(() => this.seconds++, 1000);
}

let counterB = new CounterES6();
window.setTimeout(() => console.log(counterB.seconds), 1200);
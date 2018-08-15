/**
* Arrays ES6
* ---------------------
* @author Jonas Andrade
* @since 20/06/2015
*/



/* 
Array.find
----------------------------------------------------------------------
find lets you iterate through an array and get the first element back 
that causes the given callback function to return true. Once an element
has been found, the function immediately returns. It’s an efficient way 
to get at just the first item that matches a given condition:
*/

let numbers = [1, 2, 3];
let oddNumber = numbers.find(x => x % 2 == 1);
console.log(oddNumber); // 1

/* 
You might think this is similar to filter (an ES5 method), but whereas 
filter always returns an array of matches (and will return multiple 
matches), find always returns the actual element.
*/



/* 
Array.findIndex
-----------------------------------------------------------------------
findIndex behaves very similarly to find, but instead of returning the 
element that matched, it returns the index of that element.
*/

let people = ['jamie', 'jack', 'isaac'];
let jackIndex = people.findIndex(x => x === 'jack');
console.log(jackIndex); // 1



/* 
Array.entries
-----------------------------------------------------------------------
entries is a function that returns an Array Iterator (mdn docs for 
interators) that can be used to loop through the array’s keys and values. 
entries will return an array of arrays, where each child array is an 
array of [index, value].
*/

let people = ['jamie', 'jack', 'isaac'];
let entries = people.entries();
console.log(entries.next().value); // [0, 'jamie']
console.log(entries.next().value); // [1, 'jack']
console.log(entries.next().value); // [2, 'isaac']

/* 
We can also use the spread operator to get back an array of the 
entries in one go: 
*/

let people = ['jamie', 'jack', 'isaac'];
let entries = people.entries();
console.log([...entries]); // [[0, 'jamie'], [1, 'jack'], [2, 'isaac']]

/* 
Although I won’t mention them in any detail here, we also have the new 
keys (mdn) and values (mdn) methods, which return an iterator of the 
array keys and the array values respectively.
*/




/* 
Array.from
--------------------------------------------------------------------------
Array.from takes many forms, as the ES6 compat table shows, but its general 
function is to enable the creation of a new array from an array like object. 
As its first argument it can accept something that’s array like (has length 
and indexed items), along with iterable objects, like the newly added 
Set and Map in ES6.
*/

Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from([1, 2, 3]); // [1, 2, 3]
let namesSet = new Set(['jamie', 'jack']);
Array.from(namesSet); // ['jamie', 'jack']

/* 
from can also take a second argument, which is a map function to be 
applied to each element:
*/

Array.from([1, 2, 3], x => x * x); // [1, 4, 9]

/* 
Because the method can take array like objects, we can use it to generate 
arrays of values too:
*/

Array.from({ length: 4 }, (val, key) => key); // [0, 1, 2, 3]

/* 
Each time the mapping function gets called, the val argument will be 
undefined, as this object has no actual values, but the key argument 
will be 0, then 1 and so on. This lets us generate arrays of numbers, 
but we can also return whatever we’d like from the mapping function:
*/

Array.from({ length: 2 }, () => 'jack'); // ['jack', 'jack']
    
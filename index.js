/*
-------ONLY ODDS-------
PROMPT:
create a function which accepts and array of numbers
return a new array with only the odd numbers of input

PSEUDOCODE:
function only_odds() takes in an array named input[]
make a new empty output[] array
loop through the input array copying the odd values into output
return output
*/

function only_odds(input) {
  let output = [];
  for (i in input) if (input[i] % 2 == 1) output.push(input[i]);
  return output;
}

console.log(only_odds([2, 4, 6, 8, 11, 20, 15, 22]));
console.log(only_odds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(only_odds([70, 42, 55, 81, 21, 91, 34]));
console.log(only_odds([2, 4, 6, 8, 10, 11, 12]));

/*
-------VOWEL VS CONSONANT-------
PROMPT:
Accept a string of lowercase letters.
Print the word followed by how many consonants or vowels it has.

PSEUDOCODE:
make a function named vowels_vs_consonants().
this function takes a string of lowercase chars as input.
make an array of vowels.
make an int named vowels_count.
make an int named consonant_count.
loop through the input array.
if the char is a vowel increment vowels_count else increment consonants_count.
console log the word along with vowels_count and consonants_count
*/

function vowels_vs_consonants(input) {
  let vowels_count = 0;
  let consonants_count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (i in input)
    vowels.includes(input[i]) ? vowels_count++ : consonants_count++;
  console.log(
    `${input} has ${consonants_count} consonants and ${vowels_count} vowels`
  );
}

vowels_vs_consonants("hello");
vowels_vs_consonants("ukelele");
vowels_vs_consonants("awesome");
vowels_vs_consonants("onomonopia");
vowels_vs_consonants("textbook");

/*
-------REVERSE ARRAY-------
PROMPT:
With a for loop, create a JavaScript code that creates a new array in reverse order.

PSEUDOCODE:
Make a function that takes in an array
make an output array variable
loop backwards through the input array
push that item onto the output array
*/

function reverse_array(input) {
  let output = [];
  for (i in input) output.push(input[input.length - 1 - i]);
  console.log(output);
}

reverse_array([1, 2, 3]);
reverse_array([1, 3, 5, 7, 9, 11]);
reverse_array([20, 50, 30, 60, 200]);
reverse_array([1, -1, 2, -3, 5, -8, 13]);

/*
-------FizzBuzz-------
PROMPT:
Create a JavaScript code that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

PSEUDOCODE:
loop through each int from 1 to 100
print each int on a new line
if int is a multiple of 3 print Fizz instead
if int is a multiple of 5 print Buzz instead
if int is a multiple of both 3 and 5 print FizzBuzz instead
*/

function fizz_buzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (i % 3 == 0) {
      console.log("Fizz");
      continue;
    }
    if (i % 5 == 0) {
      console.log("Buzz");
      continue;
    }
    console.log(i);
  }
}

fizz_buzz();
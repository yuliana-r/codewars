/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
  const letters = {};
  const string = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const current = string[i];

    if (letters[current] === undefined) {
      letters[current] = 1;
    } else {
      return false;
    }
  }
  return true;

  // return new Set(str.toUpperCase()).size == str.length;
}

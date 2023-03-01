/* eslint-disable func-names */
/* Complete the function to return true if the two arguments given are
anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

const isAnagram = function (test, original) {
  return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
    .toLowerCase();
};

console.log(isAnagram('Buckethead', 'DeathCubeK'));

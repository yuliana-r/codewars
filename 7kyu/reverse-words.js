/*Complete the function that accepts a string parameter, 
and reverses each word in the string. All spaces in the 
string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
  let words = str.split(/(\s+)/);

  let result = [];

  for (let i = 0; i < words.length; i++) {
    result.push(words[i].split("").reverse().join(""));
  }

  return result.join("");
}

function reverseWords2(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

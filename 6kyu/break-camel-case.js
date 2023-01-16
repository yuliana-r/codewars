/*Complete the solution so that the function will break up camel casing, 
using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

function solution(string) {
  let broken = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      broken.push(" ");
    }
    broken.push(string[i]);
  }
  return broken.join("");
}

function solution2(string) {
  return string.replace(/[A-Z]/g, " $&");
}

console.log(solution("camelCase"));

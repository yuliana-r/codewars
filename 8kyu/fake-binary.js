// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let arr = x.split("");
  return arr.map(replace).join("");

  function replace(n) {
    if (n >= 5) {
      return 1;
    } else {
      return 0;
    }
  }
}

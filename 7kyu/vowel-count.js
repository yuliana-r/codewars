// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let arr = str.split("");
  let vowels = 0;

  for (i = 0; i < arr.length; i++) {
    if (/[aeiou]/.test(arr[i])) {
      vowels++;
    }
  }

  return vowels;
}

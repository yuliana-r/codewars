// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let array = s.split(" ");

  let smallest = array[0];

  for (i = 1; i < array.length; i++) {
    if (array[i].length < smallest.length) {
      smallest = array[i];
    }
  }

  return smallest.length;
}

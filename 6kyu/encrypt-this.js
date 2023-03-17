/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/*
You want to create secret messages which can be deciphered by the Decipher this! kata.
Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = function (text) {
  return text
    .split(' ')
    .map((w) => {
      const word = w.split('');
      word[0] = word[0].charCodeAt(0);
      const temp = word[1];
      word[1] = word[word.length - 1];
      word[word.length - 1] = temp;
      return word.join('');
    })
    .join(' ');
};

/*Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name){
    let newName = name.toUpperCase().split(" ");
    return newName[0][0] + "." + newName[1][0];
}

console.log(abbrevName("Sam Harris"))
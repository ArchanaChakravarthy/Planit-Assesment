/*Challenge 2:
Write a solution to find the character that has the highest number of occurrences within a certain string, ignoring
case. If there is more than one character with equal highest occurrences, return the character that appeared first
within the string.
For example:
Input: "Character"
Output: c*/

// program to check the number of occurrence of a character

const str = "Archana";
const myString = str.toUpperCase();
const charMap = {};
for (let char of myString){
     if (!charMap[char]) {
       charMap[char] = 1;
      } else {
       charMap[char]++;
      }
  }
console.log(charMap)
let word = prompt("Please enter any word.");

//variables
let letters = word.split("");
let reversedLetters = letters.reverse("");
let reversedWord = reversedLetters.join("");

//if statement
if (word == reversedWord) {
  alert(word + " is a palindrome.");
} else {
  alert(word + " is not a palindrome.");
}

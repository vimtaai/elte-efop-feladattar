# Credit card number

Your task is to create an input field (`input`) into which the user can input their credit card's number. After each group of four digits, a space-dash-space string (` - `) should be attached to the input by your script. If the input is longer than 16 characters (plus the appended separating strings), your script should cut off the excess characters at the end. If the user deletes numbers from the input field, any trailing ` - ` strings should be removed automatically. 

## Additional tasks

2) The first number indicates the card issuer (4 ➡ Visa, 5 ➡ MasterCard). If the user inputs a MasterCard or Visa card's number, the issuer's name should be displayed next to the input (in the `span` element). If any other type of card is used,the message *"Invalid card"* should be displayed.
3) Using the images in the script boilerplate, display the card issuers' images before the issuer's name!

## Notes to teachers

- You can index `input.value` as a character array, and it has a `.length` property.

## Links

- [`insertAdjacentElement` dokumentáció (MDN)][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

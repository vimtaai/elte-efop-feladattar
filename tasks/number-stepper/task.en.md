# Number stepper

Your task is to create an input field (`input`) that has a `-` button on the left and a `+` button on the right. Clicking the `-` button decreases, clicking the `+` button increases the number in the input field. If the input field contains a non-number value then its value should be considered 0.

## Additional tasks

1) Create an option for specifying a minimum and a maximum value for the input using data attributes (`data-min`, `data-max`). Make it so that it is not possible to exceed the boundaries using the stepping buttons: if the field reaches its minimum value then the `-` button should become disabled. If it reaches the maximum value then the `+` button should be disabled. 
2) Generate the `-` and `+` buttons automatically with JavaScript for all input fields that have the `stepper` class.

## Notes to teachers

- You can use the `parseInt` function or the unary `+` operator for number conversion. Without converting to numbers the `+` operator will work as string concatenation.
- You can use the `||` operator for defaulting the value to 0.
- You can use the `dataset` property of a DOM element to access the `data-*` attributes.
- You can use the `insertAdjacentElement` method to add a new element before and after the input field.

## Links

- [`parseInt` reference (MDN)][1]
- [`dataset` reference (MDN)][2]
- [`insertAdjacentElement` reference (MDN)][3]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[2]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
## Hangman game

Create a hangman game! The main features are:

- Choose a random word! This can be baked in initially, or it can come as a random item from a list of words.
- Display as many small lines on the user interface (UI) as the number of letters of the word!
- Display the letters on the alphabet as buttons on the UI!
- Let's have a section showing how many bad letters we've guessed so far and how many mistakes we can have in total!
- Prepare some elements of the hangman game to be drawn using SVG elements.

You can find the HTML and CSS boilerplate codes among the prepared material. Analyze the code, try out the style classes prepared in CSS statically, you can find them as comments in the HTML file.

- The letters of the word are contained in the element with the identifier `the-word`. If the player wins, it gets the `won` style class! If the player loses, the spans of the unrevealed letters get the `missing` style class!
- The win/lose caption is in the element with `end-of-game` ID. It is hidden at first, but must be revealed with the appropriate caption text at the end of the game! Hide it again in a new game!
- The item with the ID `letters` contains the guessing buttons. After guessing, the button becomes `disabled`.
- The elements of the gallows are hidden in an `svg` element. As a test, we can see what it looks like if we add the `revealed` style class. Each element can be revealed by adding the `show` style class to it.

### Additional tasks

- Use the included `word.js` file to guess the random word. There are almost 18,000 Hungarian nouns in it. Also, indicate on the interface with a caption whether the player has won or not and there should be a "Play again!" button you can click to restart the game!
- Try to encapsulate the game logic as a JavaScript module!
- Try to encapsulate the logic of the interface as a separate module, too!

### Examples

<div class="columns:3 align:center">

![In-game](tasks/hangman/assets/ingame.png)

![Player wins](tasks/hangman/assets/win.png)

![Player loses](tasks/hangman/assets/lose.png)

</div>

### References

- [`Math.random` documentation (MDN)][1]
- [`addEventListener` documentation (MDN)][2]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[2]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

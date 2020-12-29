## Guess the number

Your task is to create a page, where the user will try to guess (via an `input` element) a number that's unknown to them (ranging from 1 to 10; for now you can just burn a fix number into the code). The program should display an answer, whether the number is greater or smaller than the guess by the user, and if the user guesses correctly, tell them they won the game.

### Additional tasks

- Generate a random number on each page load (from 1 to 10)!
- Make it possible to start a new game with a new number by pressing a button, and if the user figured out the number, don't let them guess again until a new game starts!
- Új játék indításakor lehessen megadni, hogy mi a minimum, és mi a maximum, melyek közt a program egy véletlen számra gondol!
- Make it possible to select the interval of the number when starting a new game!
- Change the user input in a way, that instead of guessing a number, the user asks a question. They type the number, and select an option: is the number grater/smaller/equals the guessed number? The application should answer with `yes` or `no`. The game ends when the user asks whether the number equals to the guess, and the answer is `yes`.
- If the answer to the question is `no`, randomly ncrease/decrease the number by 1, and tell the user about it! The number can now move out of the interval in some cases.

### Notes to teachers

The four solutions solve the tasks gradually in larger steps, and in the end it provides the full application with all features.

### References (optional)

- [`Math.random()` reference (MDN)][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## Memory card game

Your task is to create a memory card game, where the player flips cards over and tries to pair them. The application must have the listed features!
- Start a new game: The cards are shuffled randomly, then placed on the "table" "face-down". Each card corresponds to one image, and each image corresponds to two cards (that meaning one pair is placed of each image). When starting a new game a timer should start that counts the seconds since starting the game. A new game can only be started, when there is no game currently running!
- Flip a card: This will flip the card that the user clicked on, ie display the image on it.
    - If the user clicks on an already "face-up" card, nothing should happen.
    - If the user flips his second card, check whether the two cards are identical!
    - If the two cards are the same, they remain "face-up", and the player can guess another pair that's still "face-down".
    - If the two cards don't match, nothing should happen for a second or two (no other cards can be turned over), then the cards turn back "face-down", and the game continues.
- Victory: Once the player has found all the pairs, the counter stops and the game is over - from here on they can start a new game.
- Giving up a game: All cards are turned over, the counter stops and the game is over - from here on they can start a new game. A game can only be abandoned if there is a game currently running!
- Steps: The program keeps track of how many steps it takes the player to complete the game! Flipping a pair (two cards) counts as one step (it doesn't matter if they are correct or not).

### Notes to teachers

Particular attention should be paid to:
- resetting the counters and steps when starting a new game;
- disabling the flipping of additional cards during the second or two after an incorrect guess;
- in the same one or two seconds, if the user gives up the game, we may experience strange bugs if the action is not handled properly.

The provided solution uses event delegating to flip cards, but the application can be built by bingin several event handlers - however, this is not a recommended approach. Details of the smart delegation can be found in the [5.30 chapter](http://webprogramozas.inf.elte.hu/tananyag/kliens/#esemenyek-buborekolasa-es-delegalasa) of the Hungarian class material. One can practice felxboxes by solving this task.

### References

- [Flexbox reference (MDN)][1]

[1]:https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox

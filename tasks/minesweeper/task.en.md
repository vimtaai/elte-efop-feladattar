## Minesweeper

Create the classic minesweeper game. Some of the main features are the following:

- Create a `N`×`M` grid of fields (button)
- There are `X` mines hidden on the map
- Clicking a button reveals the field
- If the field is a mine the game is over, the entire map gets revealed
- If the field is not a mine it shows the number of mines adjacent to the field
- Right clicking a field places a flag, a field with a flag can no longer be revealed
- Right clicking a flag removes the flag
- If all the non-mine fields are revealed the player wins

### Additional tasks

- Allow the player to set the size of the game map (`N` and `M`) and the number of mines `X`
- When clicking on a field with no neighboring mines, reveal all connected fields that are guaranteed to have no mines
- Keep track of the number of mines remaining (flags are used to mark mines)
- Clicking a revealed field with both buttons that has as many neighboring flags as many neighboring mines should reveal all non-flag neighbors of that field

### Notes to teachers

It is recommended to split the development into multiple steps:

- State representation
- State rendering (rendering functions + CSS)
- Events and state transitions
- Incremental addition of new features

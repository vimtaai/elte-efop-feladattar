## Table generation

Write a JavaScript program that lists an existing dataset (animals of a farm) into a well structured table, given the user presses a button. The table should contain the header even after the rows were inserted!

### Additional tasks

1. Each animal has a field that contains a boolean (wheter given animal is indoor or not; `indoor`). If its value is `true`, the respective column should contain the text `Indoor`, while on a `false` value it should be `Outdoor`!
2. If an animal is younger than 5 years old, its row should be coloured blue, and red otherwise (use the `.young` and `.old` classes)!
3. Only list the data once, after that any buttonpress should do nothing.

### Notes to teachers

- The original data mustn't change in the proccess!
- The three solutions aren't three steps, but rather three different ideas, relying on more and more complex JavaScript features.
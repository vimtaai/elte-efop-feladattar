# Counting circles

Create an `input` field, which reacts to the `input` event and counts the number of "small circles" in the entered value the following way:

- the starting result is 0.
- every number, that contains one "circle" (**0**,**6**,**9**) should increment the result by one.
- if a number has two circles (**8**), the result should increment by two.
- every other number or character should leave the result unchanged.

Display the result in the `output` field.

## Sample input-output values:

- 6 &rarr; 1
- 8 &rarr; 2
- 69 &rarr; 2
- 1000 &rarr; 3
- 123457 &rarr; 0
- foo9bar8 &rarr; 3

## Note

The three solutions aren't three steps, but rather three different ideas, relying on more and more complex JavaScript features.
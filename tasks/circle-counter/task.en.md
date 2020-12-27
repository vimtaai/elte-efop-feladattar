## Counting circles

Create an `input` field, which reacts to the `input` event and counts the number of "small circles" in the entered value the following way:

- the starting result is 0.
- every number, that contains one "circle" (**0**,**6**,**9**) should increment the result by one.
- if a number has two circles (**8**), the result should increment by two.
- every other number or character should leave the result unchanged.

Display the result in the `output` field.

### Examples

- 6 ➡ 1
- 8 ➡ 2
- 69 ➡ 2
- 1000 ➡ 3
- 123457 ➡ 0
- foo9bar8 ➡ 3

### Notes to teachers

The three solutions aren't three steps, but rather three different ideas, relying on more and more complex JavaScript features.
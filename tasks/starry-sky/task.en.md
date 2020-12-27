## Starry sky

Your task is to draw a starry sky. Create a function that randomly draws a given number of stars on a black background. The stars should have varying size and varying color.

### Additional tasks

- Improve your program by adding an event handler: when we click somewhere on the sky a new star should appear wherever we clicked.

### Notes to teachers

- It is recommended to create a function that generates a random (integer) value between given `a` and `b` numbers.
- For generating the color of the star it is recommended to use the HSL(A) color system.
- It is recommended to create a function that draws a single star at given `(x;y)` coordinates.

### References

- [`Math.random` reference (MDN)][1]
- [`HSLA` color reference (MDN)][2]
- [`addEventListener` reference (MDN)][3]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#HSL_colors
[3]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

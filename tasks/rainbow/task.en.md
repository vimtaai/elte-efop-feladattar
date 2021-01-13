## Rainbow

Your task is to create a picture of a rainbow on the canvas. To create the picture draw semicircles/arcs with an increasing radius and various colors with a given center.


### Additional tasks

- Animate the rainbow in the following way: the semicircles/arcs are rotating with different speeds. The speed of the innermost semicircle is 1 unit. The speed of the next is 2 units, 3 units for the next, etc.

### Examples

<div class="align:center">

![The complete rainbow](tasks/rainbow/assets/rainbow.png)

</div>

### Notes to teachers

- The colors of the individual arcs can be generated easily with HSL(A) colors.
- For the animation it is recommended to implement the arcs in a separate class.

### References

- [`HSLA` color reference (MDN)][1]
- [`rotate` reference (MDN)][2]

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#HSL_colors
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate

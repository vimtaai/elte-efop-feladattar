## Drawing Pacman

Draw a picture of the famous video game mascot Pacman on a canvas.

### Additional tasks

- Rotate the image with 45 degrees
- Wrap your Pacman drawing program into a function. The function should take four arguments: `x`, `y`, `size` and `rotation`. The `rotation` argument should default to `0`. Calling the function should draw the image of Pacman at the given `(x;y)` coordinates in the given size (`size` can be either the radius or the diameter) rotated by `rotation` degrees. 

### Examples

<div class="align:center">

![Pacman](tasks/drawing-pacman/assets/pacman.png)

</div>

### Notes to teachers

- It is recommended to create a function for converting degrees to radians.
- It is recommended to save the transform state of the canvas before doing any transformations and use translation and rotation to do the drawing. Then you can revert the transformation.

### References

- [`canvas` reference (MDN)][1]
- [`rotate` reference (MDN)][2]
- [`translate` reference (MDN)][3]
- [`save` reference (MDN)][4]
- [`restore` reference (MDN)][5]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate
[3]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
[4]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
[5]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore

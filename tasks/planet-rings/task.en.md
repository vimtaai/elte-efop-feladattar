## Planet rings

Your task is to draw a planet (colored circle) with rings (ellipse) around them on a black background. Make sure that the planet is "in front of" the part of the rings that should be behind the planet.

### Additional tasks

- Make your drawing function accept four parameters: `x`, `y`, `radius`, `rotation`. The function should draw the planet to coordinates `(x;y)`. The radius of the planet should be the `radius` argument it should be rotated by `rotation` degrees.
- Improve the ring by drawing the rings as multiple thin lines with a loop.

### Notes to teachers

- To have the planet in front of only a part of the rings, you can draw planet then the rings and then draw half of the planet again to cover part of the rings.
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

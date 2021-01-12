## Drawing mandalas

Your task is to create program for drawing mandala-like images on a click of a button. The method to use is the following: there is an imaginary inner and an outer circle. On each circle there is an imaginary point, that moves each step. Every step the points in the inner and the outer circles move with a certain angle (these can be with HTML inputs). Every step we connect the two imaginary points with a straight line (you can also draw the points themselves). After several steps a drawing will form based on the angles that each point moves. The number of steps can be given with an HTML input. Experiment with various input parameters.

### Additional tasks

- Add a new color input to the page. Use the selected color to draw the mandala.
- Update your program so that you don't need a button. Draw the picture automatically when the page loads and whenever any of the parameters change.

### Examples

<div class="align:center">

![Example mandala (11, 5)](tasks/mandala/assets/mandala.png)
![Example mandala (14, 4)](tasks/mandala/assets/mandala-2.png)

</div>

### Notes to teachers

- It is recommended to translate the coordinate system to the center of the canvas.
- It is recommended to create a function for converting degrees to radians.
- For drawing the mandala there are two ways to go: 
  - creating a function to calculate the coordinates of a point based on an angle and the distance from the center,
  - rotate the coordinate system before drawing with the given angle then draw the point on the X axis.

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

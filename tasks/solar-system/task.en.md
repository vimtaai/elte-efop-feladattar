## Solar system

Create a simulation of the movement of the planets in the solar system. All planets orbit the sun (a yellow circle) that is in the center of the canvas. The planets have a circular orbit (an ellipsis in reality). Planets should be represented by colorful circles, their movement should have a constant speed. Start by simulting the orbit of the Earth and Venus.

### Additional tasks

- In addition to their current position also show the entire orbit of both planets.
- Store the planets of your simulation in an array so that it is easy to add more planets in the code.
- Make it possible so that each planet can have their own moons. Moons orbit around planets, not the sun.

### Examples

<div class="align:center">

![Solar system model](tasks/solar-system/assets/solar-system.png)

</div>

### Notes to teachers

- It is recommended to translate the coordinate system to the center of the canvas.
- For better realism the orbit radius and orbital speed of each planet can be set as a proportion of the real values.
- It is recommended to create a speed factor so that it is easy to change the speed of the animation.
- Rendering the moons can be easily solved with coordinate system transformations.
- It is possible to store moons as the properties of the planets themselves. This result (like in reality) a hierarchical system of astronomical bodies in which every body (except the sun which does not move) orbits around another. With this method the entire solar system can be "built upon" a single astronomical body (the sun).
- Lots of additional features can be added to this simulation by adding HTML controls and event handlers to the program.

### References

- [`translate` reference (MDN)][1]
- [`save` reference (MDN)][2]
- [`restore` reference (MDN)][3]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
[3]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore


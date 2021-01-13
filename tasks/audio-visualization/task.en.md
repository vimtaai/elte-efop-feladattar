## Audio visualization

Your task is to create a program to visualize a simulated audio signal. The format of this audio signal is an array that contains numbers in the `[0;200]` range. Your first task is to generate one such array and fill it up with random numbers in the given range. Generate an array with 10 values to begin with.

Next, it is time time to visualize this data. Each number in the array represents the volume of a sound channel. This is visualized as a column. The width of each column is the same (e.g. 20px), the height of the columns are equal to the values in the array. 

Set the width of the canvas to be able to accommodate your input array. There should be some empty space (e.g. 10px) between each pair of columns and also on the edges of the canvas. Finally, draw the columns representing the numbers in the array.

### Additional tasks

- Let's make the audio signal change. Create a function that changes each element of the array individually with a random integer in a given range (e.g. `[-50;50]`). Even after the changes the values in the array still should be in the original minimum-maximum range. Use this function to periodically change the values stored in the array and redraw the diagram after each change.
- Add some controls to your page. There should be five controls in total: 3 colors and 2 numbers. These are used to represent **low**, **medium**, and **high** volumes. The two numbers are the thresholds for medium and high volumes. Show each column with a color that represents its volume. Use the thresholds and colors in the inputs. Make sure that whenever the values in the inputs change the changes are also applied your diagram as well.
- Let's make the usage of colors smarter. Each column should be split into 3 sections: low volume, medium volume and high volume with their corresponding colors. The height of each section should correspond with the threshold values in the inputs but the total height should still be the same as the value in the array. The sections should be separated by a white line. If the represented value is smaller than the high volume threshold then the high volume section is missing, the same goes for the medium volume.
- Add a new button to your page. Clicking this button should add a new channel to the visualization (new element to the array). It's volume should change the same way as for the other tracks. The starting volume should be a random number in the allowed volume range. Do not forget to resize the canvas when adding a new audio channel.

### Examples

<div class="columns:3 align:center">

![Black & White visualization](tasks/audio-visualization/assets/black.png)

![Colored visualization](tasks/audio-visualization/assets/color.png)

![Segmented visualization](tasks/audio-visualization/assets/complete.png)

</div>

### Notes to teachers

- It is recommended to create a function that generates a random integer in a given interval.
- It is possible to give a negative height when drawing a rectangle. This will result in drawing a rectangle "from bottom to top".
- Either the `requestAnimationFrame` or the `setInterval` function can be used to create the animation.
- Other kind of visualizations are also possible, like using stacked markers (e.g. circles) or a broken line connecting the values.

### References

- [`Math.random` reference (MDN)][1]
- [`canvas` reference (MDN)][2]
- [`requestAnimationFrame` reference (MDN)][3]
- [`setInterval` reference (MDN)][4]
- [`addEventListener` reference (MDN)][5]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[3]: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
[4]: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
[5]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

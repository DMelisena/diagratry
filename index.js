import {square, draw_to_svg, diagram_combine} from 'https://cdn.jsdelivr.net/npm/diagramatics@1.5/dist/diagramatics.min.js' 
let mysvg = document.getElementById('mysvg');

let sq = square(10).fill('red');
draw_to_svg(mysvg, sq);

let mysvg2 = document.getElementById('mysvg2');

// define the `draw` function, without this image can't be combined
let draw = (...diagrams) => {
    draw_to_svg(mysvg2, diagram_combine(...diagrams));
};

// build the diagram objects
let sq2 = square(10).fill();
let sq3 = square(2).fill('blue')

// draw the diagram to `mysvg`
draw(sq2, sq3);

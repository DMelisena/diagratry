import {square, draw_to_svg, diagram_combine} from 'https://cdn.jsdelivr.net/npm/diagramatics@1.5/dist/diagramatics.min.js' 
let mysvg = document.getElementById('mysvg');

let sq = square(10).fill('red');
draw_to_svg(mysvg, sq);

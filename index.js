import {Interactive,image,square,line,curve,V2,draw_to_svg, diagram_combine} from 'https://cdn.jsdelivr.net/npm/diagramatics@1.5/dist/diagramatics.min.js' 
// test{{{

let mysvg = document.getElementById('mysvg');

let sq = square(10).fill('black');
draw_to_svg(mysvg, sq);
// }}}

// draw{{{
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
// }}}

// draw 3{{{
let mysvg3 = document.getElementById('mysvg3');

// define the `draw` function, without this image can't be combined
let draw3 = (...diagrams) => {
    draw_to_svg(mysvg3, diagram_combine(...diagrams));
};

var x=0
var y=0
// build the diagram objects
// let resistor = curve([V2])
let curv = curve([V2(-4,0),V2(0.5,0), V2(1,1), V2(2,-1), V2(3,1), V2(4,-1),V2(5,1),V2(6,-1),V2(6.5,0),V2(10,0),V2(10,-5),V2(0,-5),V2(-9,-5),V2(-9,0),V2(-5,0)]);
let l = line(V2(-4,1), V2(-4,-1));
let l1 = line(V2(-5,-0.5), V2(-5,0.5));
let src = "https://photon-ray.xyz/img/rlogo.jpg";
let img = image(src,0.2,0.2);
// draw the diagram to `mysvg`
draw3(curv,img,l,l1);
// }}}


// draw 4{{{
// get the svg and control element
let mysvg4 = document.getElementById('mysvg4');
let controldiv = document.getElementById('controldiv');

// define the `draw` function
let draw4 = (...diagrams) => {
    draw_to_svg(mysvg4, diagram_combine(...diagrams));
};
// create the interactive object
let int = new Interactive(controldiv, mysvg4);

// build the diagram objects
int.draw_function = (inp) => {
    let xx = inp['xx'];
    let big_sqr   = square(10).fill();
    let small_sqr = square(2).fill('red').translate(V2(xx,0));

    draw4(big_sqr, small_sqr);
}

int.slider('xx', -10, 10, 0);
int.draw4();


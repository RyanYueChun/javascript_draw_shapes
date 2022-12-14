
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
var rec = new Rectangle(10, 20, 50, 100, '#00CCC0',5);
// rec.paint(ctx);
var ligne = new Line(10, 20, 50, 100, '#00CCC0',5);
// ligne.paint(ctx);
var dessin = new Drawing();
dessin.addShape(rec);
dessin.addShape(ligne);
//dessin.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var pencil = new Pencil(ctx, dessin, canvas);
dessin.paint(ctx, canvas);

var shapeNumber = 1;
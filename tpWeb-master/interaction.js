
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.beginX = 0;
  this.beginY = 0;
  this.endX = 0;
  this.endY = 0;
  this.click = false;

	// Developper les 3 fonctions gérant les événements
  this.press = function (evt) {
    this.click = true;
    this.beginX = getMousePosition(canvas,evt).x;
    this.beginY = getMousePosition(canvas,evt).y;
    // console.log('press x : ' + this.beginX);
    // console.log('press y : ' + this.beginY);
    interactor.onInteractionStart(this);
  }.bind(this);

  this.move = function (evt) {
    if (this.click){
      this.endX = getMousePosition(canvas,evt).x;
      this.endY = getMousePosition(canvas,evt).y;
      interactor.onInteractionUpdate(this);
      // console.log('move x : ' + this.endX);
      // console.log('move y : ' + this.endY);
    }
  }.bind(this);

  this.release = function (evt) {
    this.click = false;
    interactor.onInteractionEnd(this);
    // console.log('release x : ' + this.endX);
    // console.log('release y : ' + this.endY);
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.press, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.release, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



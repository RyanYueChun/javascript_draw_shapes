
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.drawing = drawing;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	this.updateController = function() {
		let modes = document.forms[0]["editingMode"];
		let selectedMode;
		let lineWidth = document.getElementById("spinnerWidth").value;
		let colour = document.getElementById("colour").value;

		for (i=0; i<modes.length; i++) {
			let element = modes[i];

			if (element.checked) {
				selectedMode = element.value;
			}
		}

		if (selectedMode == "Line") {
			this.currEditingMode = editingMode.line;
		} else if (selectedMode == "Rectangle") {
			this.currEditingMode = editingMode.rect;
		}
		this.currLineWidth = parseInt(lineWidth);
		this.currColour = colour;
	}

	this.onInteractionStart = function(dnd) {
		this.updateController();
		switch(this.currEditingMode){
			case editingMode.rect: {
				this.currentShape = new Rectangle(
					dnd.beginX,
					dnd.beginY,
					0,
					0,
					this.currColour,
					this.currLineWidth
				);
			  	break;
			}
			case editingMode.line: {
				this.currentShape = new Line(
					dnd.beginX,
					dnd.beginY,
					dnd.beginX,
					dnd.beginY,
					this.currColour,
					this.currLineWidth
				);
			  	break;
			}
		}
		  
		this.currentShape.paint(ctx);
		
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		this.updateController();
		switch(this.currEditingMode){
			case editingMode.rect: {
				this.currentShape = new Rectangle(
					dnd.beginX,
					dnd.beginY,
					dnd.endX - dnd.beginX,
					dnd.endY - dnd.beginY,
					this.currColour,
					this.currLineWidth
				);
			  	break;
			}
			case editingMode.line: {
				this.currentShape = new Line(
					dnd.beginX,
					dnd.beginY,
					dnd.endX,
					dnd.endY,
					this.currColour,
					this.currLineWidth
				);
			  	break;
			}
		}
		this.drawing.paint(ctx);
		this.currentShape.paint(ctx);
		
	}.bind(this);

	this.onInteractionEnd = function(dnd) {
		this.updateController();
		switch(this.currEditingMode){
			case editingMode.rect: {
				this.currentShape = new Rectangle(
					dnd.beginX,
					dnd.beginY,
					dnd.endX - dnd.beginX,
					dnd.endY - dnd.beginY,
					this.currColour,
					this.currLineWidth
				);
			  	break;
			}
			case editingMode.line: {
				this.currentShape = new Line(
					dnd.beginX,
					dnd.beginY,
					dnd.endX,
					dnd.endY,
					this.currColour,
					this.currLineWidth
				);
			  	break;
			}
		}
		this.drawing.addShape(this.currentShape);
		this.drawing.paint(ctx);
		updateShapeList(this.currentShape.getKey());
	}.bind(this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};



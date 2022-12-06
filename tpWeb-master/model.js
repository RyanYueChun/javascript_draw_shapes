function Drawing() {
    this.forms = new Map();

    this.addShape = function(shape) {
        this.forms.set(
            shape.getKey(),
            shape
        );
    }

    this.getForms = function() {
        return this.forms;
    }
}

function Shape(beginX, beginY, colour, lineWidth) {
    this.beginX = beginX;
    this.beginY = beginY;
    this.colour = colour;
    this.lineWidth = lineWidth;

    this.getInitX = function() {
        return this.beginX;
    }.bind(this);

    this.getInitY = function() {
        return this.beginY;
    }.bind(this);

    this.getColour = function() {
        return this.colour;
    }.bind(this);

    this.getLineWidth = function() {
        return this.lineWidth;
    }.bind(this);

    this.getKey = function() {
        return "" +
            this.beginX +
            this.beginY +
            this.colour +
            this.lineWidth;
    };
}

function Line(beginX, beginY, endX, endY, colour, lineWidth) {
    this.endX = endX;
    this.endY = endY;
    Shape.call(this, beginX, beginY, colour, lineWidth);

    this.getFinalX = function() {
        return this.endX;
    }.bind(this);

    this.getFinalY = function() {
        return this.endY;
    }.bind(this);
}

function Rectangle(beginX, beginY, width, height, colour, lineWidth) {
    this.height = height;
    this.width = width;
    Shape.call(this, beginX, beginY, colour, lineWidth);

    this.getHeight = function() {
        return this.height;
    }.bind(this);

    this.getWidth = function() {
        return this.width;
    }.bind(this);
}
Rectangle.prototype = new Shape();
Line.prototype = new Shape();
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

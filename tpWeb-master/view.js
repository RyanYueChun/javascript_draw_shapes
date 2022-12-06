Shape.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.getColour();
    ctx.lineWidth = this.getLineWidth();    
}

Rectangle.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx) ;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(),   this.getHeight());
    ctx.stroke();
}

Line.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx) ;
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
}

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

const updateShapeList = function(shapeKey) {
    let shapeList = document.getElementById("shapeList");
    shapeList.innerHTML +=
        '<button id="buttonNumber'+shapeNumber+'" type="button" class="btn btn-default" onclick="removeShapeFromList(\''+shapeKey+'\', buttonNumber'+shapeNumber+')">' +
            '<span class="glyphicon glyphicon-remove-sign"></span>' +
        '</button>';
    shapeNumber++;
};

const removeShapeFromList = function(shapeKey, buttonId) {
    dessin.getForms().delete(shapeKey);
    dessin.paint(ctx, canvas);

    buttonId.parentNode.removeChild(buttonId);
};

// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

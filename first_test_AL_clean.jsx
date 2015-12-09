#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


var swifts = ["Holden", "Jessamyn", "Christopher", "Mittens", "Lucy"];

//set grid size
var gridNumber = 10;
var gutterWidth = 10;
var grid = gridNumber - 1;
b.println("Grid:" + grid);

function draw() {

	b.doc();

	
	var gridUnit = b.height/grid;

	var ratio = b.height/b.width;
	b.println("Page ratio: " + ratio)

	//measure equals the page size minus margins
	var measure = b.width - ((b.width / (grid/2) + b.width / grid));
	b.println("Measure: " + measure);

	//measure / 30 equals the type size in px
	var typeSize = measure / 30;
	b.println("Type size: " + typeSize);

	var leading = typeSize*1.2;
	b.println("Leading: " + leading);

	/*
	//content from hard coded array
	for(var i = 0; i < swifts.length; i++){
		b.textSize(typeSize);
		//Leading works, but is not a good idea.
			//Leading needs to be determined in a different way
			b.textLeading(typeSize * ratio);
			b.text(swifts[+i], b.width / grid, (b.height / grid) + gridUnit * i, measure, gridUnit);
		}
	*/


	//Create margins using van der graff canon
	//b.margins(b.height / grid, (b.width / (grid/2))+(leading/ratio), (b.height / (grid/2))+leading, b.width / grid);
	//b.margins(b.height / grid, b.width / (grid/2), b.height / (grid/2), b.width / grid);

	//For loop for guides
	var height = b.height + gutterWidth * 2;
	var width = b.width + gutterWidth * 2;

	var xGuides = width / grid;
	var yGuides = height / grid;

	var gutterNumber = grid - 1;
	b.println("Number of gutters: " + gutterNumber);

	var myDocument = app.documents.item(0);
	//<fragment>
	var myLayer = myDocument.layers.item(0);
	with (myDocument.spreads.item(0)){
		//Parameters (all optional): row count, column count, row gutter, 
		//column gutter,guide color, fit margins, remove existing, layer.
		//Note that the createGuides method does not take an RGB array 
		//for the guide color parameter.
		createGuides(grid, grid, leading, (leading/ratio), UIColors.blue, false, true, myLayer);
	}
		//Primary grid structure
		// for (var i = 0; i < gridNumber; i++) {

		// b.guideY((yGuides*i) - ((gutterWidth)*(i/gridNumber)) - gutterWidth);
		// b.guideY((yGuides*i) + ((gutterWidth)*((grid-i)/gridNumber)) - gutterWidth);

		// b.guideX((xGuides*i) - ((gutterWidth)*(i/gridNumber)) - gutterWidth);
		// b.guideX((xGuides*i) + ((gutterWidth)*((grid-i)/gridNumber)) - gutterWidth);

		// var right = ((gutterWidth)*(i/gridNumber));
	// }

}

b.go();
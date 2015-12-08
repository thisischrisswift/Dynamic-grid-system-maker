#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


// to load an external json file use 
//var jsonString = b.loadString("/cdcf.json");

var swifts = ["Holden", "Jessamyn", "Christopher", "Mittens", "Lucy"];

//set grid size
var gridNumber = 10;
var gutterWidth = 10;
var grid = gridNumber - 1;
b.println("Grid:" + grid);

function draw() {

	b.doc();

	

	/**
	 * this function takes a value between
	 * [0,1] inclusive and returns the unit value that
	 * that percentage corresponds to.
	 */
	 var artBoardBaseX = 0;
	function cols( t ) {
		var width = b.width;
		return artBoardBaseX + t * width;
	}

	function gutterLeft( t ) {
		return cols( t ) - (t * gutterWidth); 
	}

	function gutterRight( t ) {
		return cols( t ) + ((1 - t) * gutterWidth);
	}
	
	//var jsonData = b.JSON.decode( jsonString );
	
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

	//this works, but needs a more complex execution overall.
		//ie, using h1, h2 etc as the hook for appliying the size changes.
	var headline = typeSize * ratio;

	//content from hard coded array
	for(var i = 0; i < swifts.length; i++){
		b.textSize(typeSize);
		//Leading works, but is not a good idea.
			//Leading needs to be determined in a different way
		b.textLeading(typeSize * ratio);
		b.text(swifts[+i], b.width / grid, (b.height / grid) + gridUnit * i, measure, gridUnit);
	}


///////////////////////////////////////////////////////////////////
//// JSON content. This works but I will come back to it later////

	//contet from JSON
	//b.textSize(typeSize*ratio);
	//b.text(jsonData.data.articles["-JjBT7-aSINaPLXLYugk"].name, b.width / grid, (b.height / grid), measure, gridUnit);

	//contet from JSON
	//b.textSize(typeSize);
	//b.text(jsonData.data.articles["-JjBT7-aSINaPLXLYugk"].article, b.width / grid, (b.height / grid) + gridUnit, measure, b.height - (gridUnit * 4));
////////////////////////////////////////////////////////////


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

	// var gutterHeight = leading;
	// b.println("Gutter height: " + gutterHeight);

	// var vertGridUnit = pageMinusGutters / gutterNumber;
	// b.println("Vert Grid unit: " + vertGridUnit);

	// var gutterWidth = leading / ratio;
	// b.println("Gutter width: " + gutterWidth);

	// var x = gutterWidth * gutterNumber;
	// var pageMinusGutters = b.width - x;
	// b.println("Page width minus gutters: " + pageMinusGutters);

	// var insideGuides = pageMinusGutters / grid;

	// var y = gutterHeight * gutterNumber;



		//Primary grid structure
	for (var i = 0; i < gridNumber; i++) {
		//b.guideX(xGuides + xGuides*i) ;
		// b.guideY(yGuides + yGuides*i) ;
		// b.guideX((xGuides + xGuides*i) + ((leading / ratio)/2));
		// b.guideY((yGuides + yGuides*i) + (leading/2));
		// b.guideX((xGuides + xGuides*i) - ((leading / ratio)/2));
		// b.guideY((yGuides + yGuides*i) - (leading/2));

		b.guideY((yGuides*i) - ((gutterWidth)*(i/gridNumber)) - gutterWidth);
		b.guideY((yGuides*i) + ((gutterWidth)*((grid-i)/gridNumber)) - gutterWidth);

		b.guideX((xGuides*i) - ((gutterWidth)*(i/gridNumber)) - gutterWidth);
		b.guideX((xGuides*i) + ((gutterWidth)*((grid-i)/gridNumber)) - gutterWidth);

		var right = ((gutterWidth)*(i/gridNumber));
		b.println("This is on the right: " + right);
		// var test = yGuides * i;
		// b.println(test);

		// b.guideX((xGuides + xGuides*i) + ((leading / ratio)*(i/grid)));
		// b.guideX((xGuides + xGuides*i) - ((leading / ratio)*((grid-i)/grid)));
	}

// A little to abstract for our current level of javascript knowledge

	// for (var i = 0; i <= grid; i++) {

	// 	var t = i * (1 / gridNumber); 

	// 	b.println( "iteration: " + i + ", t = " + t );
	// 	b.println( "gutterLeft("+ t +") = " + gutterLeft( t ) );
	// 	b.println( "gutterRight("+ t +") = " + gutterRight( t ) );

	// 	b.guideX( gutterLeft( t ) );

	// 	b.guideX( cols( t ) );

	// 	b.guideX( gutterRight( t ) );

	// }


	
	//for(var i = 0; i < gutterNumber; i++){
	//	b.guideX(insideGuides + insideGuides*i);
	//}
}

b.go();
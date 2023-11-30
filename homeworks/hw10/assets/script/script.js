document.addEventListener("DOMContentLoaded", function () {
	function hideAllOutfits() {
	  var outfits = document.getElementsByClassName("outfit");
	  for (var i = 0; i < outfits.length; i++) {
		outfits[i].style.display = "none";
	  }
	}

// s1 outfit
let s1 = document.getElementById('s1'); /* get #s1 outfit */

/* the process: */
s1.addEventListener("click", function () {
	// /* 1. hide #body (set display to none) */
	// document.getElementById('body').style.display = 'none';
	// console.log("Clicked outfit 1");
	// /* 2. call the function you created to hide all the outfits 
	// (remember: get the list of .outfit elements and use a for loop to hide each outfit) */
	// hideAllOutfits();
	// /* 3. show #o1 outfit (set display to block)*/
	// document.getElementById('o1').style.display = 'block';

	document.getElementById('body').style.display = 'none';
    
    // 2. call the function to hide all the outfits
    hideAllOutfits();

    // 3. show #o1 outfit (set display to block)
    document.getElementById('o1').style.display = 'block';
});

// s2 outfit
/* get #s2 outfit */
/* repeat process */
let s2 = document.getElementById('s2');
s2.addEventListener("click", function () {
	document.getElementById('body').style.display = 'none';

	hideAllOutfits();
	document.getElementById('o2').style.display = 'block';
})

// s3 outfit
/* get #s3 outfit */
/* repeat process */
let s3 = document.getElementById('s3');
s3.addEventListener("click", function () {
	console.log("Clicked outfit 3");
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o3').style.display = 'block';
})

// s4 outfit
/* get #s4 outfit */
/* repeat process */
let s4 = document.getElementById('s4');
s4.addEventListener("click", function () {
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o4').style.display = 'block';
});

// s5 outfit
/* get #s5 outfit */
/* repeat process */
let s5 = document.getElementById('s5');
s5.addEventListener("click", function () {
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o5').style.display = 'block';
});

// strip outfit
let strip = document.getElementById("strip-button");/* get #strip-button */
strip.addEventListener("click", function () {
	/* call the function you created to hide all the outfits */
	hideAllOutfits();
	/* show #body */
	document.getElementById('body').style.display = 'block';
});
});
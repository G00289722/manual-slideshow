// create a new array to hold the images
var myPix = new Array("images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg")
var thisPic = 0 

// Setup the function for the previous images

function doPrevious(){
	if (document.images && thisPic > 0) {
		thisPic--
		document.myPicture.src=myPix[thisPic]
	}
}

//  Setup a function for the next image 

function doNext() {
	if (document.images && thisPic < myPix.length-1) {
		thisPic++
		document.myPicture.src=myPix[thisPic]
	}
}

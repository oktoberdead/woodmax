let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
let sizeArg;
window.onload = function () {

	sizeArg = window.innerWidth >= 1000 ? 3 : window.innerWidth >= 800 ? 4 : window.innerWidth >= 400 ? 5 : 6; 
	document.getElementById("mainheader").style.height = window.innerHeight / sizeArg + "px";



}

window.onresize = function(){
	sizeArg = window.innerWidth >= 1000 ? 3 : window.innerWidth >= 800 ? 4 : window.innerWidth >= 400 ? 5 : 6; 
	document.getElementById("mainheader").style.height = window.innerHeight / sizeArg + "px";
	console.log(sizeArg);
}
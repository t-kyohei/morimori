var scount=0;
var tcount=0;


document.getElementById("shizu").onclick = function() {
   scount ++;
   checkcount();
};

document.getElementById("tanu").onclick = function() {
   tcount ++;
   checkcount();
};



function checkcount(){

	if (scount==8 &&  tcount==5 ) {
	alert('正解！');
   document.getElementById("next").classList.remove("d-none");

	}

}


var kiba = document.getElementById("kiba");
kiba.style.position = "absolute";

kiba.onmousedown = function(event){
  document.addEventListener("mousemove",onMouseMove);
}
var onMouseMove = function(event){
  var x = event.clientX;
  var y = event.clientY;
  var width = kiba.offsetWidth;
  var height = kiba.offsetHeight;
  kiba.style.top = (y-height/2) + "px";
  kiba.style.left = (x-width/2) + "px";
}



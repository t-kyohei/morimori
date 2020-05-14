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





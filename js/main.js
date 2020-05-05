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

	if (scount==3 &&  tcount==4 ) {
	alert('正解！');
	location.href = './fin/';
	}

}




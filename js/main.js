var scount=0;
var tcount=0;
var last=0;

var btns =document.getElementsByClassName("btn-info");
	for(var i=0; i<btns.length;i++){
		btns[i].onclick = function() {
		   	if(last == 1){
		   	 checklast(this.value);
		   	}
		};
	}
	
function checklast(value){
	
	var kt = document.getElementById("collapseExample3").classList.contains("show");
	var mt = document.getElementById("collapseExample6").classList.contains("show");
	var kn = document.getElementById("collapseExample10").classList.contains("show");
	
	var bol = false;
	
	if(value==1){
		if(kt==false &&  mt==true &&kn == true){
			bol = true;
		}
	}else if(value==2){
		if(kt==true &&  mt==false &&kn == true){
			bol = true;
		}
	}else if(value==3){
		if(kt==true &&  mt==true &&kn == false){
			bol = true;
		}
	}else{
		if(kt==true &&  mt==true &&kn == true){
			bol = true;	
		}
	}

	if (bol == true) {
	alert('何かが開きます');
	document.getElementById("lasttext").classList.remove("d-none");
	document.getElementById("maintext").classList.add("d-none");
	
	}else{
	document.getElementById("lasttext").classList.add("d-none");
	document.getElementById("maintext").classList.remove("d-none");
	
	}

}



document.getElementById("submit").onclick = function(){
var text = document.getElementById("text").value;
	if(text =="12345" ){	
		alert("己の３つの扉を開いたときに鍵に導かれる");
		last=1;
	}

}




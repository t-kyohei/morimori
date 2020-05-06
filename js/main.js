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

	var collapses =document.getElementsByClassName("collapse");
	var bol = true;
	var kt = false;
	var mt = false;
	var kn = false;
	
	for(var i=0; i<collapses.length;i++){
	//一つずつ確認する
	  var now  = collapses[i];
	  var nowval = now.getAttribute("value");
	  var boli = now.classList.contains("show");

	    if(nowval == value){
	    //押していたら、フラグを変える
	    	if(boli == true){
	    	    boli = false;
	    	}else{
	    	    boli = true;
	    	}
	    }
	    
		
	    if(nowval == "3" || nowval == "6" || nowval == "10"){
	      if(boli == false){
	         bol = false;
	      }
	    }else{
		   if(boli == true){
		     bol = false;
		   }
		
		}
		
		
	}
	
	
	var kt = document.getElementById("collapseExample3").classList.contains("show");
	var mt = document.getElementById("collapseExample6").classList.contains("show");
	var kn = document.getElementById("collapseExample10").classList.contains("show");
	

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




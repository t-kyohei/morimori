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

kiba.setAttribute('draggable', true);
    kiba.addEventListener('touchstart', function(e){
        draggingItem = kiba;
    });
    kiba.addEventListener('touchend', function(e){
        draggingItem = null;
    });
    kiba.addEventListener('touchmove', function(e){
        e.preventDefault();
        var getOrder = function(elem){
            return [].indexOf.call(elem.parentNode.children, elem);
        }
        var pointedElement = document.elementFromPoint(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset);
        if(!pointedElement.getAttribute('draggable') || pointedElement == draggingItem) return;
        var order = getOrder(pointedElement) - getOrder(draggingItem);
        if(order > 0) {
            pointedElement.parentNode.insertBefore(pointedElement, draggingItem);
        } else if (order < 0) {
            pointedElement.parentNode.insertBefore(draggingItem, pointedElement);
        }
        
     });



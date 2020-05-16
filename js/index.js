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


		 function touchStartEvent(event) {
            // タッチによる画面スクロールを止める
            event.preventDefault();
        }

        function touchMoveEvent(event) {
            event.preventDefault();

            // ドラッグ中のアイテムをカーソルの位置に追従
            var draggedElem = event.target;
            var touch = event.changedTouches[0];
            event.target.style.position = "fixed";
            event.target.style.top = (touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2) + "px";
            event.target.style.left = (touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2) + "px";
        }

        function touchEndEvent(event) {
            event.preventDefault();

            // ドラッグ中の操作のために変更していたスタイルを元に戻す
            var droppedElem = event.target;
            droppedElem.style.position = "";
            event.target.style.top = "";
            event.target.style.left = "";

            // ドロップした位置にあるドロップ可能なエレメントに親子付けする
            var touch = event.changedTouches[0];
            // スクロール分を加味した座標に存在するエレメントを新しい親とする
            var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
            if(newParentElem.id == "tota"){
               alert("とたけけ");
            }
            if (newParentElem.className == "droppable-elem") {
                newParentElem.appendChild(droppedElem);
                
            }
        }

        
            // ドラッグ可能アイテムへのタッチイベントの設定
                var kiba =  document.getElementById("kiba")
                kiba.addEventListener('touchstart', touchStartEvent, false);
                kiba.addEventListener('touchmove', touchMoveEvent, false);
                kiba.addEventListener('touchend', touchEndEvent, false);
        
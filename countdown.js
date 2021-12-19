var min = 0	;
var smin = 0;
var sec = 5;
var msec = 9;
function counter(){
	var changebtn = document.getElementsByClassName("changebtn");
	changebtn[0].innerHTML="<button class='reset' onclick='reset()'>Reset</button>";

	var btn = document.getElementsByName("btn");
		btn[0].disabled = false;
		btn[1].disabled = false;
		btn[2].disabled = false;
		btn[3].disabled = false;

	document.documentElement.requestFullscreen();
	
	document.onkeydown = function (e) {  
        return (e.which || e.keyCode) != 116;  
    };   
	window.onbeforeunload = function() {
        return 0;
    }
    window.addEventListener('contextmenu', function (e) {  
  		e.preventDefault(); 
	}, false);

setTimeout(
	function(){
			document.getElementById("min").innerHTML=min;
			document.getElementById("smin").innerHTML=smin;
			document.getElementById("msec").innerHTML=msec;
			document.getElementById("sec").innerHTML=sec;

			msec = msec - 1;
			if(msec<0){
				sec = sec - 1;
				msec = 9;
			}
			if(sec<0){
				smin = smin - 1;
				sec = 5;
			}
			if(smin<0){
				min = min - 1;
				smin = 9;
			}
			if(min<0){
				alert("Match Over!");
				window.location.href="index.html";
			}
			counter();
		},
		1000
		)
}
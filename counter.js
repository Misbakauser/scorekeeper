var teamI=0;
var teamII=0;

function add(a){
	if(a==1){
		teamI = teamI + 1;
		document.getElementById("teamIpoint").innerHTML = teamI;
	}else{
		teamII = teamII + 1;
		document.getElementById("teamIIpoint").innerHTML = teamII;
	}
}
function deduct(a){
	if(a==1){
		teamI = teamI - 1;
		document.getElementById("teamIpoint").innerHTML = teamI;
	}else{
		teamII = teamII - 1;
		document.getElementById("teamIIpoint").innerHTML = teamII;
	}
}
function reset(){
	teamI = 0;
	teamII = 0;
	window.location.href="index.html";
}
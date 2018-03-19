
window.SetVolume = function(name,val)

{
    var player = document.getElementById(name);
    player.volume = val / 100;
}

var tvoff = true;
var numon = 0;
var aImages= ["gifs/tv2.gif","gifs/cloud4.gif","gifs/waves2.gif","gifs/tree2.gif"]
var num = 0;

var oImage = null;
var iIdx = 0;

function TimerSwitch(){
	  //look only once in DOM and cache it
	  if(oImage === null){
	    oImage = window.document.getElementById("cloud");
	  }
  	  oImage.src = aImages[(++iIdx)%(aImages.length)];
  	  setTimeout('TimerSwitch()', 10000);
	}

function playm(name){

	var myAudio = document.getElementById("a_"+name);

	if (!myAudio.paused) {
  		myAudio.pause();
  		numon--;
  	} else {
    	myAudio.play();
    	numon++;
  	}
  	console.log(numon)
  	console.log(tvoff)

  	if (numon > 0){

  		if (tvoff){
  		document.getElementById('black').style.display = 'none';
  		document.getElementById("cloud").style.display = "block"
  		TimerSwitch()
  		tvoff = false; }		
  	} else if (numon == 0){
  		tvoff = true;
  		document.getElementById('black').style.display = 'block'; 		


  	}
    
	myAudio.onplaying = function() {
		document.getElementById(name).style.filter = "none";
	};

	myAudio.onpause = function() {
		document.getElementById(name).style.filter = "grayscale(1)";
	};

}


let stationNuevoTiempoPeru = document.getElementById("audioNTPeru");
let station3abn = document.getElementById("audio3abn");
let stationRPP = document.getElementById("audioRPP");
let stationExitosa = document.getElementById("audioExitosa");

let btnpauseNTPeru = document.getElementById("btnpauseNTPeru");
let btnpause3abn = document.getElementById("btnpause3abn");
let btnpauseRPP = document.getElementById("btnpauseRPP");
let btnpauseExitosa = document.getElementById("btnpauseExitosa");

let allowPlay = true
let audio;
let video;
let stationValues;
let idPlaybtn;
let idPausebtn;

//Hide pause buttons
const btnpauseElements = document.getElementsByClassName("button_pause");
	
	for( const btnpauseElement of btnpauseElements){
		btnpauseElement.style.display = "none";    
    	  
	}
//


function createAudio(stationValues){

  if (allowPlay){
  audio = document.createElement('audio');
  audio.src = stationValues.getAttribute("stream");
  audio.setAttribute('type',stationValues.getAttribute("streamtype"));
  audio.setAttribute('id', stationValues.getAttribute("id"));
  audio.volume = 0.8;
  console.log(stationValues.getAttribute("stream"));
  console.log(stationValues.getAttribute("streamtype"));
  allowPlay = false;
  playAudio();
  
 
 }

}

function playAudio(){
     audio.play();
 
}


function pauseAudio(){
    audio.pause();
    allowPlay = true;

}

function createVideo(stationValues){

  if (allowPlay){
  video = document.createElement('video');
  video.src = stationValues.getAttribute("stream");
  video.setAttribute('type',stationValues.getAttribute("streamtype"));
  video.setAttribute('id', stationValues.getAttribute("id"));
  video.volume = 1;
  console.log(stationValues.getAttribute("stream"));
  console.log(stationValues.getAttribute("streamtype"));
  allowPlay = false;
  playVideo();
  

 }

}
function playVideo(){
  video.play();

}

function pauseVideo(){
 video.pause();
 allowPlay = true;

}

function hideButtonPlay(idValue){
	idPlaybtn= idValue.getAttribute("id"); 
	let playbtnValue = document.getElementById(idPlaybtn);
	playbtnValue.style.display = "none";
	if (idPlaybtn == "audioNTPeru"){
		btnpauseNTPeru.style.display = "block";
	} else if (idPlaybtn == "audio3abn"){
		btnpause3abn.style.display = "block";
	} else if (idPlaybtn == "audioRPP") {
		btnpauseRPP.style.display = "block";
	} else if (idPlaybtn == "audioExitosa") {
		btnpauseExitosa.style.display = "block";
	}

}

function showButtonPlay(idValue){
	idPausebtn = idValue.getAttribute("id"); 
	let pausebtnValue = document.getElementById(idPausebtn);
	pausebtnValue.style.display = "none";
	let showPlayButton = document.getElementById(idPlaybtn);
	showPlayButton.style.display ="block";

}



/* no used
let BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			//|| this.searchVersion(navigator..appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
*/
function loadVersionOS(){
//BrowserDetect.init();
//document.write('<p class="accent">You\'re using ' + BrowserDetect.browser + ' ' + BrowserDetect.version + ' on ' + BrowserDetect.OS + '! <img src="images/' + BrowserDetect.browser + '.gif"></p>');
let userAgent = navigator.userAgent;
let browVersion;
console.log(userAgent);
if (userAgent.includes('Firefox/')) {
  console.log(`Firefox v${userAgent.split('Firefox/')[1]}`)
  window.location.href = "newbrowradio.html";
} else if (userAgent.includes('Edg/')) {
  console.log(`Edg v${userAgent.split('Edg/')[1]}`)
  window.location.href = "newbrowradio.html";
  
} else if (userAgent.includes('Chrome/')) {
  console.log(`Chrome v${userAgent.split('Chrome/')[1]}`)
  window.location.href = "newbrowradio.html";
} else if (userAgent.includes('Safari/')) {
  // Safari
  browVersion = userAgent.split('Safari/')[1];
  console.log(browVersion);
  if (browVersion.includes("7.")){
    window.location.href = "oldbrowradio.html";
  }else{
    window.location.href = "newbrowradio.html";
  }

}

return false;
}

function redirectUrl() {
	window.location.href = "oldbrowradio.html";
}
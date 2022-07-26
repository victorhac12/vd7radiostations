let stationNuevoTiempoPeru = document.getElementById("audiontperu");
let station3abn = document.getElementById("audio3abn");
let stationRPP = document.getElementById("audioRPP");
let stationExitosa = document.getElementById("audioExitosa");
let btnpause3abn = document.getElementById("btnpause3abn");

let allowPlay = true
let audio;
let video;
let stationValues;

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
  video.volume = 0.8;
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

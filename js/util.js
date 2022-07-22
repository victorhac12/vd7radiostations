
let stationsList = document.getElementById("stationsList");

function activarAudio(stationList){

    let stationElement = document.querySelector(stationList);
    stationElement.play();
    /*
    stationElement.addEventListener('play', (event) => {
        console.log('The Boolean paused property is now false. Either the ' +
        'play() method was called or the autoplay attribute was toggled.');
      });

      */
}
// This handler will be executed only once when the cursor
// moves over the unordered list
/*
stationsList.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
*/
// This handler will be executed every time the cursor
// is moved over a different list item
/*
stationsList.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
*/

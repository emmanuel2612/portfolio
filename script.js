window.onload = () => {

    var intro = document.getElementById("intro");
    var main = document.getElementById("main");

var i = 0;
var txt = 'Developed By Emmanuel'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  setTimeout(() => {
    secondFunction();
  },3000);

}


function secondFunction (){

    main.style.display = "flex";
    intro.style.display = "none";
}


typeWriter();










}
// Hello everyone! If you're wondering how I made this small function, I simply made two arrays. One of the arrays contained a list of adjectives, while the other contained a list of objects. Then, I wrote a function to choose one random adjective and one random object and then put them together. I hope you enjoy using the Random Name Generator! //

var adjective = ["swantex/5232550241073835/03/2014/383", "swantex/5266600003002669/648", "swantex/5490078901014300/688", "swantex5486025404019050/087", "swantex/5497014804040269/261", "swantex/5131431017479799/261", "swantex/5232533905217146/583", "swantex/5366278218300077/095","swantex/5430164825139275/568", "swantex/5430164825139275/568", "swantex/5310003054859648/542", "swantex/5486961384153677/840", "swantex/5490017330120783/856","swantex/5232540935009575/543", "swantex/5131433052259722/343", "swantex/5131433083780423/419", "swantex/5101990004744065/815"] 
var object = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var list;

function generator() {
 document.getElementById("name").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
}

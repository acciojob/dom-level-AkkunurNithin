//your JS code here. If required.
let elm = document.getElementById("level");

let level = 0;

while (elm){
	level++
	elm = elm.parentElement;
}

alert("The level of the element is: " +level);
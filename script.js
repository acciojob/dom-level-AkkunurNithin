//your JS code here. If required.
let el = Document.getElementById("level");

let level = 0;

while (el){
	level++
	el = el.parentElement;
}

alert = ("The level of the element is: " +level);
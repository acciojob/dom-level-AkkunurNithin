//your JS code here. If required.
const el = Document.getElementById("level");

var level = 0;

while (el){
	level++
	el = el.parentElement;
}

alert = ("The level of the element is: " +level);
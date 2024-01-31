/*
to create a new p element, which should be blue, and be inserted just before the <section>
*/
//create a new element
let newp = document.createElement("p");
//make colour blue
newp.style.cssText = "color: blue;";
//content for the p element
newp.textContent = "hi This is a new P!";
//get the section element
let sectionElement = document.querySelector("section");
//insert into webpage
sectionElement.parentNode.insertBefore(newp, sectionElement);
let newli = document.querySelector(".benefits-list");
if (newli.hasChildNodes()) {
    let children = newli.childNodes;
    console.log(children);

    let newli2 = document.createElement("li");
    //make colour blue
    newli2.style.cssText = "color: blue;";
    //content for the li element
    newli2.textContent = "Helps improve blood circulation";
    //insert into webpage
    newli.insertBefore(newli2, children[7]);
}

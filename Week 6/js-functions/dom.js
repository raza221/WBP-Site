function theDOMElementWalker(node){
    if (node.nodeType==1){
        console.log(node)
        node = node.firstChild;
        while(node){
            console.log(node.nodeType);
            theDOMElementWalker(node);
            console.log("value: ", node.textContent);
            node = node.nextSibiling;
        }
    }
}
let list = document.querySelector('article');
theDOMElementWalker(list);

const DOMNodeCollection = require("./dom_node_collection")

window.$1 = (arg) => {
    if(typeof(arg)==="string"){
        const select = Array.from(document.querySelectorAll(arg))
        return DOMNodeCollection(select)
    }
    if(arg instanceof HTMLElement){
        let new_inst = new DOMNodeCollection([arg])
        return new_inst
    }
}
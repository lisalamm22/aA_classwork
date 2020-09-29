class DOMNodeCollection{
    constructor(HTMLels){
        this.HTMLels = HTMLels
    }

    html(string) {
        if(string === undefined){return this.HTMLels.slice(0,1).innerHTML}
        this.HTMLels.forEach(node => {
            node.innerHTML = string
        });
    }

    empty(){
        this.HTMLels.forEach(node => {
            node.innerHTML = ""
        });
    }
}

module.exports = DOMNodeCollection

const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let new_item = document.createElement("p");
    new_item.innerText = string;
    //has child node? if so, remove
    if(htmlElement.hasChildNodes()) {
        // debugger;
        htmlElement.replaceChild(new_item, htmlElement.firstElementChild);
    }else{
        htmlElement.appendChild(new_item);
    }
};

// htmlGenerator('Party Time.', partyHeader);

//export default htmlGenerator;
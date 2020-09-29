
export const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = () => {
  let my_ary = [];
  for(let i = 0; i < dogs.length; i++) {
      let my_dog = document.createElement("a");
      my_dog.innerHTML = Object.keys(dogs)[i];
      my_dog.href = Object.values(dogs)[i];
      
      let my_tag = document.createElement("li");
      my_tag.addClass("dog-link");
      my_tag.append(my_dog);
      console.log(my_dog);//nothing happened
      console.log(my_tag);//nothing happens
      my_ary.push(my_tag);

  }

  return my_ary;
}

export const attachDogLinks = () => {
  let dogLinks = dogLinkCreator();
  // console.log(dogLinks)
  let dogList = document.querySelector("ul.drop-down-dog-list");
  // console.log(dogList)
  dogLinks.forEach( (li)=>{
    dogList.append(li)
  })
}


attachDogLinks();



// Module.exports =  DropDown;
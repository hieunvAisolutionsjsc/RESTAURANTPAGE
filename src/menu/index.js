import { createTitle } from "../common";

const createMenuTitle = (title) => {
    const elementMenuTitle = document.createElement("div") ; 
    const elementMenuTitleH1 = document.createElement("p") ; 
    elementMenuTitleH1.innerHTML = title

}
const BeveragesList = [
    {
        title : "Honey Tea" , 
        dec :  "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!" , 
        price : "$2",
        src : "https://eckben.github.io/bearysBreakfastBar/img/honeyTea.jpg"
    } , 
    {
        title : "Beary Tea" , 
        dec :  "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",  price : "$2",
        src : "https://eckben.github.io/bearysBreakfastBar/img/bearyTea.jpg"
    }
]
const sides = [
    
]
const createItem = (content)=>{
    const elementItem = document.createElement("div") ; 
    let elementItemChild ,elementImg; 
  for (const key in content) {
     key === "src" 
     ? (
        elementItemChild = document.createElement("div"),
        elementImg = document.createElement("img") ,
        elementImg.setAttribute("src" , content[key]),
        elementItemChild.append(elementImg)
        )
        :(
          elementItemChild = document.createElement("p") ,
          elementItemChild.innerHTML = content[key]  
        )
        elementItem.append(elementItemChild)
  }
const elementItemContainer = document.createElement("div") ; 
elementItemContainer.append(elementItem)
    return elementItemContainer; 
}
const createMenu = ()=>{
    const elementMenu = document.createElement("div"); 
    elementMenu.setAttribute("class" , "menu")
    const elementTitle = createTitle("Menu") ;
    const elementBeverages = document.createElement("div") ; 
    elementBeverages.setAttribute( "class" , "Beverages") ; 
    const elementcontainer = document.createElement("div"); 
    BeveragesList.forEach(element => {
        const elementItem = createItem(element);
        elementcontainer.appendChild(elementItem);
    });
    
    elementMenu.append(elementTitle , elementcontainer) ;

    return elementMenu ; 

}
export default createMenu ; 
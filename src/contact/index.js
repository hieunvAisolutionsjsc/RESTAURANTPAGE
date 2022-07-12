import { createTitle } from "../common";


const createItem = (content) =>{
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
  elementItemContainer.append(elementItem) ; 
  
return elementItemContainer;
}
const contactList = [
    {
        title : "Mama bear" , 
        job : "Chef" , 
        phone : "555-555-5554" , 
        mail : "totallyRealEmail@notFake.com" , 
        src: "https://eckben.github.io/bearysBreakfastBar/img/mamabear.png"
    } , 
    {
        title : "Mama bear" , 
        job : "Chef" , 
        phone : "555-555-5554" , 
        mail : "totallyRealEmail@notFake.com" , 
        src: "https://eckben.github.io/bearysBreakfastBar/img/mamabear.png"
    } , 
    {
        title : "Mama bear" , 
        job : "Chef" , 
        phone : "555-555-5554" , 
        mail : "totallyRealEmail@notFake.com" , 
        src: "https://eckben.github.io/bearysBreakfastBar/img/mamabear.png"
    }
]
const createContact = ()=>{
    const elementContact = document.createElement("div") ; 
    elementContact.setAttribute("class" , "contact")
    const elementTitle = createTitle("Contact Us") ; 
    const elementContainer = document.createElement("div") ; 
    contactList.forEach(element => {
      
          const elementItem = createItem(element) ; 
          console.log(elementItem)
          elementContainer.append(elementItem) ; 
    });
    elementContact.append(elementTitle , elementContainer) ; 
    return elementContact ; 
}
export default createContact ; 
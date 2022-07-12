
import createHome from "./home/index";
import createMenu from './menu/index';
import createContact from './contact/index';

const menu = createMenu() ; 
const home = createHome() ; 
const contact = createContact();
let curTab = 1 ; 
const tab = [
    {
        title : "Home" , 
        index : 1 , 
    },
    {
        title : "Menu" , 
        index : 2, 
    },
    {
        title : "Contact" , 
        index : 3 , 
    }
]

const elementContent = document.getElementById("content") ; 
const elementContainer = document.createElement("div") ; 
elementContainer.setAttribute("class" , 'container') ;
const createTab = ()=>{
    const elementTab = document.createElement("div") ; 
    elementTab.setAttribute("class" , "tab active") ; 
      tab.forEach(element=>{
        const elementItemTab = document.createElement("button") ; 
        elementItemTab.innerHTML = element.title ; 
        elementItemTab.onclick = (e) =>{
            
            curTab = element.index ;
            changeTab(element.index); 
        }
        elementTab.appendChild(elementItemTab)
      })
    return elementTab
}
 const changeTab = (index)=>{
    const listTab = document.getElementsByClassName("tab")[0].querySelectorAll("button") ; 
    console.log(listTab);
    if(curTab === 2){
        menu.classList.add("active");
        home.classList.remove("active") ; 
        contact.classList.remove("active");
        
    }
   else if(curTab === 3){
     contact.classList.add("active") ; 
     menu.classList.remove("active");
     home.classList.remove("active");
   }else{
   home.classList.add("active") ; 
    menu.classList.remove("active");
    contact.classList.remove("active");
   }
   listTab.forEach((element , indexe) => {
    if(indexe === (index-1)){
       element.classList.add("bolder") ; 
    }else{
        element.classList.remove("bolder") ; 
    }
});
 }
 elementContent.append(createTab())
 
 elementContainer.append(home)
elementContainer.append(menu)
 elementContainer.append(contact)
 elementContent.append(elementContainer) 
 changeTab(1)
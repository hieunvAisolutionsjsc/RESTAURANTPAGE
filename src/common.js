const createTitle = (title)=>{
    const elementTitle = document.createElement("div") ;
    elementTitle.setAttribute("class" , 'title')
    const elementTitleH1 = document.createElement("h1") ;
    const elementTitleDivImage1 = document.createElement("div");
    const elementTitleImage1 =  document.createElement("img");
    elementTitleImage1.setAttribute("src" , "https://eckben.github.io/bearysBreakfastBar/img/bee.svg") ; 
    elementTitleDivImage1.appendChild(elementTitleImage1)
    const elementTitleDivImage2 = document.createElement("div");
    const elementTitleImage2 =  document.createElement("img");
    elementTitleImage2.setAttribute("src" , "https://eckben.github.io/bearysBreakfastBar/img/bee.svg") ; 
    elementTitleDivImage2.appendChild(elementTitleImage2)
    elementTitleH1.innerHTML = title; 
    elementTitle.append(elementTitleDivImage1 , elementTitleH1 , elementTitleDivImage2) ; 
    return elementTitle ; 
}
export {createTitle}
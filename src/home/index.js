 import {createTitle} from "../common.js"
 const hourList = [
    {
        day : "Sunday" , 
        time : "8am - 8pm"

    },
    {
        day : "Monday" , 
        time : "6am - 6pm"

    },
    {
        day : "Tuesday" , 
        time : "6am - 6pm"

    },
    {
        day : "Wednesday" , 
        time : "6am - 6pm"

    },
    {
        day : "Thursday" , 
        time : "6am - 10pm"

    },
    {
        day : "Friday" , 
        time : "6am - 10pm"

    },
    {
        day : "Saturday" , 
        time : "8am - 10pm"

    }
 ]

const createHome = ()=>{
    const elementContainer = document.createElement("div") ; 
    elementContainer.setAttribute("class" , "home") ; 
    // create title
    const elementTitle = createTitle("Beary's Breakfast Bar") ; 
    // create Goldilocks
    const elementGoldilocks = document.createElement("div") ; 
    elementGoldilocks.setAttribute("class" , "goldilock") ; 
    const elementGoldilocksP = document.createElement("p") ; 
    elementGoldilocksP.innerHTML = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    const elementGoldilocksK = document.createElement("p") ;
    elementGoldilocksK.innerHTML = "Goldilocks" ; 
    const elementGoldilocksContainer= document.createElement("div") ;
     
    elementGoldilocksContainer.append(elementGoldilocksP , elementGoldilocksK) ; 
    elementGoldilocks.append(elementGoldilocksContainer)
    //  create Hours
    const elementHours = document.createElement("div") ; 
    elementHours.setAttribute("class" , "hours");
    const elementHoursTitle = document.createElement("p") ; 
    elementHoursTitle.innerHTML = "Hours" ; 
    const elementHoursList = document.createElement("div") ; 
    hourList.forEach(element => {
        const elementHoursListItem  = document.createElement("p") ; 
        elementHoursListItem.innerHTML = `${element.day} : ${element.time}` ; 
        elementHoursList.append(elementHoursListItem);

    });
    const elementHoursContainer = document.createElement('div') ; 

    elementHoursContainer.append(elementHoursTitle , elementHoursList);
    elementHours.append(elementHoursContainer)
    //  create location
    const elementLocation = document.createElement("div") ; 
    elementLocation.setAttribute("class","location")
    const elementLocationH1 = document.createElement("p") ; 
    elementLocationH1.innerHTML = "Location" ; 
    const elementLocationContent = document.createElement("p") ; 
    elementLocationContent.innerHTML = "123 Forest Drive, Forestville, Maine"  ; 
    const elementLocationcontainer = document.createElement("div") ; 
elementLocationcontainer.append(elementLocationH1 , elementLocationContent);
elementLocation.append(elementLocationcontainer)
// inseart  elment
    elementContainer.append(elementTitle,elementGoldilocks , elementHours , elementLocation);

    return elementContainer ; 

}
export default createHome
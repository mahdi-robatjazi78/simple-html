window.addEventListener('load' ,()=>{
 
    window.scroll({
        top: 500,
        behavior: "smooth",
    });
})



function disableFormSubmitButton(){
    submitButton.disabled= true;
}
function enableFormSubmitButton(){
    submitButton.disabled= false;
}

const formTag = document.querySelector("form")
const borderedSections = document.querySelectorAll("#lists > div")

formTag.addEventListener('submit' , (event)=>{
    event.preventDefault()
    
    for(item of borderedSections){
        if(item.style.borderColor === "red"){
            item.style.borderColor ="blue"
        }else{
            item.style.borderColor ="red"

        }
    }
    
    

})



const emailField= document.querySelector("input[type = 'email']")
const pinField= document.querySelector("input[placeholder = 'pin']")
const carField= document.querySelector("select[id = 'cars']")
const submitButton= document.querySelector("input[type = 'submit']")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



let emailError = false
 


emailField.addEventListener('keyup' , (event)=>{

    if(!emailRegex.test(event.target.value)){
        if(event.target.value){
        emailField.style.borderColor = "red"
        emailField.style.outlineColor = "red"

        disableFormSubmitButton()
        }else{
        enableFormSubmitButton()

        }

    }else{
        emailField.style.borderColor = "green"
        emailField.style.outlineColor = "green"
        enableFormSubmitButton()
    } 
})


pinField.addEventListener('keyup' , (event)=>{

 
    if(event.target.value.length < 5 ){
    pinField.style.borderColor = "red"
    pinField.style.outlineColor = "red"

    disableFormSubmitButton()
     

 

    }else{
        pinField.style.borderColor = "green"
        pinField.style.outlineColor = "green"
        enableFormSubmitButton()
    } 
})

carField.addEventListener("change" , (e)=>{
    if(e.target.value){
        carField.style.borderColor = "green"
        carField.style.outlineColor = "green"
    }
})
// Enter your JavaScript for the solution here...

document.querySelector('form')
    
.addEventListener("submit", function(e){
    e.preventDefault()  
    const memeImageChoice = e.target.memeImage.value
    const getTopText = e.target.memeTopText.value
    const getBottomText = e.target.memeBottomText.value
    let errorError = false

    function memeImageDisplay(){
        if(memeImageChoice === ""){
            const warning = document.querySelector('.error')
            warning.textContent = "You must select an image"
            return errorError = true;
        }else{
            let getImageChoice = document.querySelector("img")
            getImageChoice.src = "./img/" + memeImageChoice + ".png"
        }
    }

    function textDisplay(){
        if(getTopText === "" || getBottomText === ""){
            const warning = document.querySelector('.error')
            warning.textContent = "You must enter something in both input fields"
            return errorError = true;
        }else{
            function updateInnerHTML (selector, newValue){
                document.querySelector(selector).innerHTML = newValue;
            }
            updateInnerHTML('.top-text', getTopText);
            updateInnerHTML('.bottom-text', getBottomText);
        }
    }

    function errorFlag(){
        if(errorError === false){
            memeImageDisplay();
            textDisplay();
        }
    }

    errorFlag();
})

    


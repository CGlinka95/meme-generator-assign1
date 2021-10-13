// Enter your JavaScript for the solution here...
window.addEventListener('load', function(){
    const memeGenerator = document.querySelector('form')
    const imageSelect = document.querySelector('select')
    const topText = document.querySelector("input")
    const bottomText = document.querySelector(".memeBottomText")
    const generateButton = document.querySelector('.submit')
    const resetButton = document.querySelector('.reset')
    const memeDisplay = document.querySelector('.meme-display')
    const topTextDisplay = document.querySelector('.top-text')
    const bottomTextDisplay = document.querySelector('.bottom-text')
    // ASK ABOUT THE BELOW REFERENCE VARIABLE!!!
    const warning = document.querySelector(".warning");
    
    memeGenerator.addEventListener("submit", function(e){
        e.preventDefault()

        // Variable declarations
        let memeSelect = Option(imageSelect.value.trim());
        let topTextInput = textContent(topText.value.trim());
        let bottomTextInput = textContent(bottomText.value.trim());

        // **********Image validation***********
        if(isNaN(memeSelect)) {
            warning.classList.remove('hide')
            warning.querySelector('span').textContent = "A selection is required"
        }
        else {
            warning.classList.add('hide');
            memeDisplay.value = memeSelect
        }

        // **********topText validation***********
        if(isNaN(topTextInput)) {
            warning.classList.remove('hide')
            warning.querySelector('span').textContent = "An input is required"
        }
        else {
            warning.classList.add('hide');
            topTextDisplay.value = topTextInput
        }

        // **********bottomText validation***********
        if(isNaN(bottomTextInput)) {
            warning.classList.remove('hide')
            warning.querySelector('span').textContent = "An input is required"
        }
        else {
            warning.classList.add('hide');
            bottomTextDisplay.value = bottomTextInput
        }

        // Capture user input(topText)?
        topText.addEventListener('input', function(e){
            warning.classList.add('hide')
        })
        // Focus cursor?
        topText.addEventListener('focus', function(e){
            warning.classList.add('hide')
            e.target.value=""
        })

        // Capture user input(bottomText)?
        bottomText.addEventListener('input', function(e){
            warning.classList.add('hide')
        })
    })
})
// Enter your JavaScript for the solution here...
window.addEventListener('load', function(){
    const memeGenerator = document.querySelector('form')
    const imageSelect = document.querySelector('select')
    const topText = document.querySelector("input")
    const bottomText = document.querySelector(".memeBottomText")
    const generateButton = document.querySelector('.submit')
    const resetButton = document.querySelector('.reset')
    const warning = document.querySelector(".warning");
    const memeDisplay = document.querySelector('.meme-display')
    const topTextDisplay = document.querySelector('.top-text')
    const bottomTextDisplay = document.querySelector('.bottom-text')

    console.log(memeGenerator, imageSelect, topText, bottomText, generateButton, resetButton, topTextDisplay, bottomTextDisplay, memeDisplay)
})
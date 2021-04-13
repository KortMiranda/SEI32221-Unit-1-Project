//all variables pulled from the DOM 
const genButton = document.querySelector('.genButton')
const charFront = document.querySelector('.charFront')
const charBack = document.querySelector('.charBack')
const prompt = document.querySelector('h4')
const promptText = document.querySelector('.prompt')
const inputText = document.querySelector('#inputBar')
const submitButton = document.querySelector('#submitButton')
const correctModal = document.getElementById('modal-correct')
const incorrectModal = document.getElementById('modal-incorrect')
const closeButton = document.getElementById('close')
const nextCardButton = document.getElementById('next-card')
const card = document.querySelector('.card')
const correctAudio = document.querySelector('#correct-audio')
const incorrectAudio = document.querySelector('#incorrect-audio')
const correctCount = document.querySelector('.correct')
const incorrectCount = document.querySelector('.incorrect')

//variables created for score count
let correctScore = 0
correctCount.innerHTML = correctScore
let incorrectScore = 0
incorrectCount.innerHTML = incorrectScore


//retrieves name data from SWAPI
async function getData() {
    let randomId = Math.floor(Math.random() * 80) //has be declared within the function before the url
    const url = `https://swapi.dev/api/people/${randomId}`
    fetch(url)
    .then(res => {
        return res.json()
    })
    
    .then(data => {
        charFront.innerText = data.name
        charBack.innerText = data.name
        console.log("success!", data)
    })
    .catch(err => console.log('something went wrong', err))
}

//Determines if the user types the name in the input bar correctly
const checkAnswer = () => {
    if(inputText.value.toLowerCase() === charBack.innerHTML.toLowerCase() || inputText.value === charBack.innerHTML) {
        return true
    } else {
        return false
    }
}

//function that handles the flip event for the card
const flipped = (keyEvent) => {
    if(keyEvent.keyCode == 39 || keyEvent.keyCode == 37)
    card.classList.toggle('is-flipped')   
}

//functions that trigger the sound effect to tell the user know if the input is correct or incorrect
const triggerCorrectAudio = () => {
    correctAudio.play();
}

const triggerIncorrectAudio = () => {
    incorrectAudio.play();
}

//modals to notifiy the user if input is correct or incorrect
const openModal = () => {
    if(checkAnswer() === true) {
    correctModal.style.display = 'block';
    triggerCorrectAudio()
    } else if(checkAnswer() === false) {
    incorrectModal.style.display = 'block';
    triggerIncorrectAudio();
    }
    
     
}

//the button within this modal will prevent the user from moving on until the user gets the input correct
const closeModal = () => {
    incorrectModal.style.display = 'none';
    incorrectScore++ //will accumulate how many times the incorrect input is submitted to the score board
    incorrectCount.innerHTML = incorrectScore 
    
}

//once the answer is correct and next card is selected, a new card will generate.
const nextCard = () => {
    correctModal.style.display = 'none';
    card.classList.toggle('is-flipped')
    correctScore++ // will accumulate how many times the correct input is submitted to the score board
    correctCount.innerHTML = correctScore 
    charFront.innerText = "" //to create a blank card once the next card is up
}

//All event listeners 
genButton.addEventListener('click', getData)
submitButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
nextCardButton.addEventListener('click', nextCard)
card.addEventListener('keydown', flipped )

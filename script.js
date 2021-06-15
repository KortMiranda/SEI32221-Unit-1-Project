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


let correctScore = 0
correctCount.innerHTML = correctScore
let incorrectScore = 0
incorrectCount.innerHTML = incorrectScore



async function getData() {
    let randomId = Math.floor(Math.random() * 80)
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


const checkAnswer = () => {
    if(inputText.value.toLowerCase() === charBack.innerHTML.toLowerCase() || inputText.value === charBack.innerHTML) {
        return true
    } else {
        return false
    }
}

const flipped = (keyEvent) => {
    if(keyEvent.keyCode == 39 || keyEvent.keyCode == 37)
    card.classList.toggle('is-flipped')   
}


const triggerCorrectAudio = () => {
    correctAudio.play();
}

const triggerIncorrectAudio = () => {
    incorrectAudio.play();
}

const openModal = () => {
    if(checkAnswer() === true) {
    correctModal.style.display = 'block';
    triggerCorrectAudio()
    } else if(checkAnswer() === false) {
    incorrectModal.style.display = 'block';
    triggerIncorrectAudio();
    }   
     
}

const closeModal = () => {
    incorrectModal.style.display = 'none';
    incorrectScore++ 
    incorrectCount.innerHTML = incorrectScore 
    
}

const nextCard = () => {
    correctModal.style.display = 'none';
    card.classList.toggle('is-flipped')
    correctScore++ 
    correctCount.innerHTML = correctScore 
    charFront.innerText = "" 
}


genButton.addEventListener('click', getData)
submitButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
nextCardButton.addEventListener('click', nextCard)
card.addEventListener('keydown', flipped )

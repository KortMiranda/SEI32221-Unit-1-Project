
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

const openModal = () => {
    if(checkAnswer() === true) {
    correctModal.style.display = 'block';
    } else if(checkAnswer() === false) {
    incorrectModal.style.display = 'block';
    }
}

const closeModal = () => {
    incorrectModal.style.display = 'none';
    
}

const nextCard = (keyEvent) => {
    correctModal.style.display = 'none';
    card.classList.toggle('is-flipped')
    getData() 
}



genButton.addEventListener('click', getData)
submitButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
nextCardButton.addEventListener('click', nextCard)
card.addEventListener('keydown', flipped )
// inputText.addEventListener('keypress', function(e1) {
//     if(e1.keyCode === 'Enter') {
//         e1.preventDefault()
//         inputText.click()
//     }
// })

const genButton = document.querySelector('.genButton')
const charFront = document.querySelector('.charFront')
const charBack = document.querySelector('.charBack')
const prompt = document.querySelector('h4')
const promptText = document.querySelector('.prompt')
const inputText = document.querySelector('#inputBar')
const submitButton = document.querySelector('#submitButton')

async function getData(e) {
    e.preventDefault()
    let randomId = Math.floor(Math.random() * 80) //has be declared within the function before the url
    const url = `https://swapi.dev/api/people/${randomId}`
    fetch(url)
    .then(res => {
        return res.json()
    })
    
    .then(data => {
        //front of card
        charFront.innerText = data.name

        //back of card
        charBack.innerText = data.name

        console.log("success!", data)
    })
    .catch(err => console.log('something went wrong', err))
}

const checkAnswer = (event) => {
    if(inputText.value.toLowerCase() === charBack.innerHTML.toLowerCase() || inputText.value === charBack.innerHTML) {
        console.log("true") 
    } else {
        console.log("false")
    }

}

genButton.addEventListener('click', getData)
submitButton.addEventListener('click', checkAnswer)
// inputText.addEventListener('keypress', function(e1) {
//     if(e1.keyCode === 'Enter') {
//         e1.preventDefault()
//         inputText.click()
//     }
// })
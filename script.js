
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

const checkAnswer= () => {
    if(inputText.value.toLowerCase() === charBack.innerHTML.toLowerCase() || inputText.value === charBack.innerHTML) {
        console.log("true") 
    } else {
        console.log("false")
    }
    // console.log(inputText.value)
}
genButton.addEventListener('click', getData)
submitButton.addEventListener('click', checkAnswer)
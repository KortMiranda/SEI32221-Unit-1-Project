
const genButton = document.querySelector('.genButton')
const charHeader = document.querySelector('.charHeader')


async function getData(e) {
    e.preventDefault()
    let randomId = Math.floor(Math.random() * 55)
    const url = `https://swapi.dev/api/people/${randomId}`
    fetch(url)
    .then(res => {
        return res.json()
    })
    
    .then(data => {
        randomId
        charHeader.innerText = data.name
        console.log("success!", data)
    })
    .catch(err => console.log('something went wrong', err))
}

genButton.addEventListener('click', getData)
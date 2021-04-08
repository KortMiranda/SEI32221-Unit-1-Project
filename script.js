const genButton = document.getElementsByClassName('genButton')
const charHeader = document.querySelector('.charHeader')

async function getData(e) {
    e.preventDefault()
    const url = 'https://swapi.dev/api/people/44/'
    fetch(url)
    .then(res => {
        return res.json()
    })
    
    .then(data => {
        charHeader.innerText = data.name
        console.log(data.name)
        console.log("success!", data)
    })
    .catch(err => console.log('something went wrong', err))
}

genButton[0].addEventListener('click', getData)
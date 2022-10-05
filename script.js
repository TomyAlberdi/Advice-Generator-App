const quote = document.querySelector('.quote')
const id = document.querySelector('#qid')
const txt = document.querySelector('#qtx')
const dice = document.querySelector('.dice')

const endpoint = 'https://api.adviceslip.com/advice'

dice.addEventListener('click', async () => {
    let data = await getData()
    renderData(data)
})

let getData = async () => {
    try {
        let info = await fetch(`${endpoint}`)
        info = await info.json()
        return info
    } catch (error) {
        return alert('Error')
    }
}

let renderData = data => {
    id.innerHTML = "Advice #" + data.slip.id
    txt.innerHTML = data.slip.advice
}

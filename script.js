function getNewGrid(numberOfCells) {
    for (let i = 0; i < numberOfCells; i++) {
        const stringBlocks = document.createElement('div')
        stringBlocks.classList.add('stringBlock')
        conteiner.appendChild(stringBlocks)
        for (let j = 0; j < numberOfCells; j++) {
            const block = document.createElement('div')
            block.classList.add('block')
            stringBlocks.appendChild(block)
            block.style.height = `${800 / numberOfCells}px`
            block.addEventListener('mouseenter', () =>
                block.style.backgroundColor = 'blue')
        }
    }
}

const conteiner = document.querySelector('.conteiner')
const clear = document.querySelector('.clear')
const changeNumber = document.querySelector('.changeNumber')
let newNumberOfCells = 16
    
clear.addEventListener('click', () => {
    conteiner.innerHTML = ''
    getNewGrid(newNumberOfCells)
})

changeNumber.addEventListener('click', () => {
    while (true) {
        newNumberOfCells = +prompt('Enter the number of cells (from 1 to 100)')
        if (newNumberOfCells > 0 && newNumberOfCells <= 100) {
            break
        }
    }
    conteiner.innerHTML = ''
    getNewGrid(newNumberOfCells)
    
})

getNewGrid(newNumberOfCells)
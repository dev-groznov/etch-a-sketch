const conteiner = document.querySelector('.conteiner')

for (let i = 0; i < 16; i++) {
    const stringBlock = document.createElement('div')
    stringBlock.classList.add('stringBlock')
    conteiner.appendChild(stringBlock)
    for (let j = 0; j < 16; j++) {
        const block = document.createElement('div')
        block.classList.add('block')
        stringBlock.appendChild(block)
    }
}
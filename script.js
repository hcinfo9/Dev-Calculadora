const limpaTela = document.querySelector('.limpa-tela')
const valorDisplay = document.querySelector('.display')

// valida se alguma letra ou caractere não permitido é digitado e apaga ele
valorDisplay.addEventListener('keyup', (e) => {
    const newValue = e.target.value.replace(/[^0-9\-.*/+]/g, '')
    e.target.value = newValue

})

const adicionaValores = (number) => {
    valorDisplay.value += number
}

const resultadoConta = () => {
    if(valorDisplay.value.includes('/0')){
        valorDisplay.style.fontSize='28px'
        valorDisplay.value = 'Não divisivél por zero'
        display = setTimeout(() =>{
            valorDisplay.style.fontSize='48px'
            valorDisplay.value=''
        },2000)
    }
    else {
        valorDisplay.value = eval(valorDisplay.value)
    }
    
}

const inverterNumero = () => {
    valorDisplay.value = valorDisplay.value * -1
}


limpaTela.addEventListener('click', () => {

    if (valorDisplay.value === "") return

    valorDisplay.value = ""
})


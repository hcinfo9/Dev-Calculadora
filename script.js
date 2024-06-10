const limpaTela = document.querySelector('.limpa-tela')
const valorDisplay = document.querySelector('.display')
const restrictedSymbols = [".", "+", "/", "*", "-"];
const operadores = document.querySelectorAll('.operator')
const ponto = document.querySelector('.ponto')

// valida se alguma letra ou caractere não permitido é digitado e apaga ele
valorDisplay.addEventListener('keyup', (e) => {
    const newValue = e.target.value.replace(/[^0-9\-.*/+]/g, '')
    e.target.value = newValue

})

  valorDisplay.addEventListener('keydown', (event) => {
    if (restrictedSymbols.includes(event.key)) {
        const lastChar = valorDisplay.value.slice(-1);
        if (restrictedSymbols.includes(lastChar)) {
            event.preventDefault(); // Prevent duplicate symbol
        }
    }
  });

ponto.addEventListener('click', () => ponto.disabled=valorDisplay.value.includes('.'))


operadores.forEach((operador) => {
    operador.addEventListener('click', ()=>{
  
        if(valorDisplay.value) {
            operadores.forEach((element) =>{
                element.disabled=true 
                ponto.disabled=false
            })
        }
    })
})

   

const adicionaValores = (number) => {
    valorDisplay.value += number
}

const resultadoConta = () => {
    if(valorDisplay.value.includes('/0')){
        valorDisplay.style.fontSize='28px'
        valorDisplay.value = 'Não divisivél por zero'
        setTimeout(() =>{
            valorDisplay.style.fontSize='48px'
            valorDisplay.value=''
        },2000)
    }
    else {
        try{
            valorDisplay.value = eval(valorDisplay.value)
        }catch (error){
            console.error("Error:", error.message)
            valorDisplay.value='Valores invalidos'
        }
        
    }
    operadores.forEach((element) => element.disabled=false)
    ponto.disabled=false
    
}

const inverterNumero = () => {
    valorDisplay.value = valorDisplay.value * -1
}


limpaTela.addEventListener('click', () => {

    if (valorDisplay.value === "") return

    valorDisplay.value = ""

    operadores.forEach((element) => element.disabled=false)
    ponto.disabled=false
})



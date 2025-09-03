function commonInput(){
    const parent = document.getElementsByClassName('filter')[0]
    const commonInputContainer = document.createElement('div')
    commonInputContainer.setAttribute('id', 'inputContainer')

    parent.appendChild(commonInputContainer)

    //insere label e input no html
    const label = document.createElement('label')
    label.setAttribute('for', 'filterValue')

    const input = document.createElement('input')
    input.setAttribute('type', document.getElementById('filterType').value)
    input.setAttribute('id', 'filterValue')
    
    commonInputContainer.appendChild(label)
    commonInputContainer.appendChild(input)
}

function radioInput(){
    const parent = document.getElementsByClassName('filter')[0]
    const radioContainer = document.createElement('div')
    radioContainer.setAttribute('id', 'inputContainer')

    parent.appendChild(radioContainer)

    //cria o label
    const label = document.createElement('label')
    label.setAttribute('for', 'filterValue')
    label.textContent = 'Requer Receita? '

    //cria o input sim
    const inputSim = document.createElement('input')
    inputSim.setAttribute('type', 'radio')
    inputSim.setAttribute('id', 'filterValue')
    inputSim.setAttribute('name', 'prescription')
    inputSim.setAttribute('value', 'true')

    //cria input não
    const inputNao = document.createElement('input')
    inputNao.setAttribute('type', 'radio')
    inputNao.setAttribute('id', 'filterValue')
    inputNao.setAttribute('name', 'prescription')
    inputNao.setAttribute('value', 'false')

    //insere os elementos no html
    radioContainer.appendChild(label)
    radioContainer.appendChild(inputSim)
    radioContainer.appendChild(document.createTextNode('Sim '))
    radioContainer.appendChild(inputNao)
    radioContainer.appendChild(document.createTextNode('Não'))
}

function removeInput(){
    const parent = document.getElementsByClassName('filter')[0]
    console.log(parent)

    const existingInput = document.getElementById('inputContainer')
    console.log(existingInput)

    if (existingInput) {
        console.log('removendo')
        parent.removeChild(existingInput)

    }
}
export function createFilterInput() {
    const filterType = document.getElementById('filterType').value

    // Input e label
    if (filterType === '') {
        removeInput()
    } else if(filterType === 'radio'){
        removeInput()
        radioInput()
    }else {
        removeInput()
        commonInput()
    }
}
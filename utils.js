export function commonInput(){

    //cria o parent
    let parent = document.getElementsByClassName('filter')[0]

    //insere label e input no html
    let label = document.createElement('label')
    label.setAttribute('for', 'filterValue')

    let input = document.createElement('input')
    input.setAttribute('type', document.getElementById('filterType').value)
    input.setAttribute('id', 'filterValue')
    
    parent.appendChild(label)
    parent.appendChild(input)
}

export function radioInput(){
    //insere label e input radio no html
    parent = document.getElementsByClassName('filter')[0]

    //cria o label
    let label = document.createElement('label')
    label.setAttribute('for', 'filterValue')
    label.textContent = 'Requer Receita? '

    //cria o input sim
    let inputSim = document.createElement('input')
    inputSim.setAttribute('type', 'radio')
    inputSim.setAttribute('id', 'filterValue')
    inputSim.setAttribute('name', 'prescription')
    inputSim.setAttribute('value', 'true')

    //cria input não
    let inputNao = document.createElement('input')
    inputNao.setAttribute('type', 'radio')
    inputNao.setAttribute('id', 'filterValue')
    inputNao.setAttribute('name', 'prescription')
    inputNao.setAttribute('value', 'false')

    //insere os elementos no html
    parent.appendChild(label)
    parent.appendChild(inputSim)
    parent.appendChild(document.createTextNode('Sim '))
    parent.appendChild(inputNao)
    parent.appendChild(document.createTextNode('Não'))
}

export function createFilterInput(){
    let filterType = document.getElementById('filterType').value

    //input e label
    if (filterType === 'radio'){
        radioInput()
    } else {
        commonInput()
    }
}
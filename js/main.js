import BtnExcluir from './componentes/excluiTarefa.js'
import BtnConcluir from './componentes/concluiTarefa.js'

//Selecionando através do Data Attributes inserido no HTML
const novaTarefa = document.querySelector('[data-btn-task]')


const criarTarefa = (e) => {

    //Pausando evento padrão - Recarregar da página (form)
    e.preventDefault()
    
    let input = document.querySelector('[data-input-task]')
    const valor = input.value
    
    let erro = document.querySelector('[data-error]')

    if (valor == "" || undefined){
        erro.textContent = "O campo não pode ser vazio. Tente novamente."
        return
    }


    const ul = document.querySelector('[data-list-task]')
    const li = document.createElement('li')
    const div = document.createElement('div')

    //Template string
    const conteudo = `<p> ${ valor } </p>`

    ul.appendChild(li)
    li.innerHTML = conteudo
    div.appendChild(BtnConcluir())
    div.appendChild(BtnExcluir())
    li.appendChild(div)

    li.classList.add('item-lista')

    erro.textContent = ""
    input.value = ""
}

novaTarefa.addEventListener('click', criarTarefa)
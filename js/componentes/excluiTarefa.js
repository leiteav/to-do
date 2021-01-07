const BtnExcluir = () => {
    const btnExcluir = document.createElement('button')

    btnExcluir.classList.add('btn-exclui')

    btnExcluir.addEventListener('click', excluirTarefa)

    return btnExcluir
}

const excluirTarefa = (e) => {
    const btnClicado = e.target
    const div = btnClicado.parentElement
    const tarefaExclusa = div.parentElement

    tarefaExclusa.remove()

}

export default BtnExcluir
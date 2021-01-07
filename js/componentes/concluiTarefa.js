const BtnConcluir = () => {
    const btnConcluido = document.createElement('button')

    btnConcluido.classList.add('btn-conclui')

    btnConcluido.addEventListener('click', concluirTarefa)

    return btnConcluido
}
const concluirTarefa = (e) => {
    //Identificando alvo do evento, isto é, onde clicado
    const bntClicado = e.target
    //Identificando elemento pai do elemento clicado
    const div = bntClicado.parentElement
    //Subindo mais um elemento
    const tarefaConcluida = div.parentElement
    //Toggle retorna true ou false - aplica/remove a classe de acordo com o retorno
    tarefaConcluida.classList.toggle('done')

}

export default BtnConcluir
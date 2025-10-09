const submit = () => {
    let input = document.getElementById('input').value
    let tarefa = document.getElementById('tarefa')
    let itens = document.createElement('div')
    itens.className = 'itens'

    itens.innerHTML = `<p class="texto">${input}</p>
    <input onclick="remove()" type="button" value="x">`

    tarefa.appendChild(itens)
}

const cross = () => {
    let texto = document.getElementsByClassName('texto')
    let style = texto.style.textDecoration

    if (style == 'none') {
        texto.classList.remove('texto')
        texto.classList.add('riscado')
        texto.style.textDecoration = "none"
    } else {
        texto.classList.remove('riscado')
        texto.classList.add('texto')
    }
}

const remove = () => {

}
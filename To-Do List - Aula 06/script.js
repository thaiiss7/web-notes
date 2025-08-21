const submit = () => {
    let input = document.getElementById('input').value
    let tarefa = document.getElementById('tarefa')
    let itens = document.createElement('div')
    itens.className = 'itens'

    itens.innerHTML = `<p onclick="cross()" id="">${input}</p>
    <input type="button" value="x">`

    tarefa.appendChild(itens)
}

const cross = () => {
    let texto = document.getElementById('texto')
}
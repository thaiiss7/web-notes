// let title = document.getElementById('el1').innerHTML
// console.log(title)

const switchColor = () => {
    let color = document.getElementById('corzinha').value
    let quadrado = document.getElementById('quadrado')

    quadrado.style.backgroundColor = color
    
    // if (quadrado.classList.contains('ok')) {
    //     quadrado.classList.remove('ok');
    //     quadrado.classList.add('notOk');
    // }
    // else{
    //     quadrado.classList.remove('notOk');
    //     quadrado.classList.add('ok');
    // }

    // quadrado.classList.remove('ok')
    // quadrado.classList.add('corzinha')
}
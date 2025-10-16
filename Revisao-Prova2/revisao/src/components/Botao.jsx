export function Botao({cor, conteudo, altura, largura, borda}){
    return(
        <>
            <button style={{backgroundColor: cor, height: altura, width: largura, borderRadius: borda}} >{conteudo}</button>
        </>
    )
}
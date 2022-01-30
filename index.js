let botao = document.getElementById("botao");

botao.addEventListener("click",clicar);
function clicar(){
    let resposta = document.querySelector("div#res");
    let numero = Number(document.getElementById("numero").value)
    if (numero  <= 10 && numero >= 1){
        
        resposta.innerHTML = `<p>numero valido!<p>`
        for (let numeroQueSeraMultiplicado = 1; numeroQueSeraMultiplicado <= 10;numeroQueSeraMultiplicado = numeroQueSeraMultiplicado + 1){
            let calculoTabuada = numero * Number(numeroQueSeraMultiplicado);
            alert(`${calculoTabuada}`)
        }
        
    }else {
        resposta.innerHTML = `<p> numero invalido digite novamente!</p>`
    }
}
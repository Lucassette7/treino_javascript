let numeros = ""
function adicionarTela(valor){
    numeros += valor
    document.getElementById('tela').innerText = numeros
}

function limpar (){
    document.getElementById('tela').innerText = ''
    numeros = ''
}

function calculo() {
    try {
        // Calcula a expressão usando eval
        const resultado = eval(numeros);
        document.getElementById('tela').innerText = resultado
        numeros = ''
    } catch (erro) {
        console.error('Erro no cálculo:', erro); // Se ocorrer um erro, exibe no console
    }
}






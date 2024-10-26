// Função para concatenar nome e idade
function concatenarDados() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let resultadoConcatenacao = `Seu nome é ${nome} e você tem
    ${idade} anos.`;
    document.getElementById("resultadoConcatenacao").innerText =
    resultadoConcatenacao;
    }
    // Função para somar dois números
    function somarNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultadoSoma = `A soma dos números é: ${num1 + num2}`;
    document.getElementById("resultadoSoma").innerText =
    resultadoSoma;
    }
    // Função para alterar o estilo do parágrafo
    function alterarParagrafo() {
    let paragrafo = document.getElementById("paragrafoAlterar");
    paragrafo.style.color = "red";
    paragrafo.style.fontSize = "20px";
    paragrafo.style.fontWeight = "bold";
    paragrafo.innerText = "O estilo deste parágrafo foi alterado!";
    }
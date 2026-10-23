
console.log("JavaScript carregado com sucesso!");

const nomeAluno = "Heitor";
let idade = 20;
const curso = "Engenharia de Software";
const aprovado = true;

console.log(nomeAluno);
console.log(idade);
console.log(curso);
console.log(aprovado);

idade = 21;
console.log(idade);

console.log(typeof nomeAluno);
console.log(typeof idade);
console.log(typeof aprovado);

const nome = "Ana";
const idadeAna = 21;

const mensagem = `Nome: ${nome} | Idade: ${idadeAna}`;
console.log(mensagem);

const preco = 120;
const quantidade = 3;
const percentualDesconto = 10;

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const resultado1 = 10 + 5 * 2;
const resultado2 = (10 + 5) * 2;

console.log(resultado1);
console.log(resultado2);

const idadeMinima = 18;

console.log(idadeMinima > 18);
console.log(idadeMinima >= 18);
console.log(idadeMinima < 18);
console.log(idadeMinima <= 18);
console.log(10 === 10);
console.log(10 === "10");
console.log(10 !== 10);

const idadeUsuario = 20;
const possuiIngresso = true;

const podeEntrar = idadeUsuario >= 18 && possuiIngresso;
console.log(podeEntrar);

const ehProfessor = false;
const ehAluno = true;

const possuiAcesso = ehProfessor || ehAluno;
console.log(possuiAcesso);

const bloqueado = false;
console.log(!bloqueado);

const nomeProduto = "Teclado";
const precoProduto = 150;
const quantidadeProduto = 2;
const descontoProduto = 10;
const disponivel = true;

const subtotalProduto = precoProduto * quantidadeProduto;
const valorDesconto = subtotalProduto * descontoProduto / 100;
const valorFinal = subtotalProduto - valorDesconto;

console.log(`Produto: ${nomeProduto}`);
console.log(`Preço: ${precoProduto}`);
console.log(`Quantidade: ${quantidadeProduto}`);
console.log(`Subtotal: ${subtotalProduto}`);
console.log(`Desconto: ${valorDesconto}`);
console.log(`Valor final: ${valorFinal}`);
console.log(`Disponível: ${disponivel}`);

console.log(typeof nomeProduto);
console.log(typeof precoProduto);
console.log(typeof disponivel);


const nota = 75;

if (nota >= 60) {
    console.log("Aprovado");
}

const notaFinal = 55;

if (notaFinal >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

const notaClassificacao = 82;

if (notaClassificacao >= 90) {
    console.log("Excelente");
} else if (notaClassificacao >= 75) {
    console.log("Muito bom");
} else if (notaClassificacao >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

const notaAluno = 70;
const frequencia = 80;

if (notaAluno >= 60 && frequencia >= 75) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno não aprovado");
}

const prioridade = "alta";
const atrasado = true;

if (prioridade === "alta" && atrasado) {
    console.log("ATENÇÃO IMEDIATA");
} else {
    console.log("Acompanhamento normal");
}

const idadeAcesso = 20;
const possuiCadastro = true;
const bloqueadoAcesso = false;

if (idadeAcesso >= 18 && possuiCadastro && !bloqueadoAcesso) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}


const cliente = "Heitor";
const valorPedido = 250;
const prioridadePedido = "alta";
const pedidoAtrasado = true;

let descontoPedido = 0;

if (valorPedido > 200) {
    descontoPedido = valorPedido * 10 / 100;
}

const valorFinalPedido = valorPedido - descontoPedido;

let situacaoPedido;

if (prioridadePedido === "alta" && pedidoAtrasado) {
    situacaoPedido = "ATENÇÃO IMEDIATA";
} else {
    situacaoPedido = "Acompanhamento normal";
}

console.log(`Cliente: ${cliente}`);
console.log(`Valor do pedido: R$ ${valorPedido}`);
console.log(`Desconto: R$ ${descontoPedido}`);
console.log(`Valor final: R$ ${valorFinalPedido}`);
console.log(`Situação: ${situacaoPedido}`);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
let soma = 0;

for (let i = 1; i <= 5; i++) {
    soma = soma + i;
}

console.log(soma);
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
const quantidadePedidos = 8;

for (let i = 1; i <= quantidadePedidos; i++) {
    console.log(`Processando pedido ${i}`);
}
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Fim"); 

function exibirSaudacao() {
    console.log("Olá!");
}

exibirSaudacao();

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirNome("Marina");
exibirNome("Carlos");
exibirNome("João");

function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

const totalPedido = calcularTotal(50, 3);

console.log(totalPedido);

function verificarSituacao(nota, frequencia) {
    if (nota >= 60 && frequencia >= 75) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(verificarSituacao(80, 90));
console.log(verificarSituacao(50, 90));
console.log(verificarSituacao(80, 60));

function calcular() {
    const resultado = 10 + 20;
    console.log(resultado);
}

calcular();

function somar(a, b) {
    return a + b;
}

const somarArrow = (a, b) => {
    return a + b;
};

const somarCurta = (a, b) => a + b;

console.log(somar(2, 3));
console.log(somarArrow(2, 3));
console.log(somarCurta(2, 3));

function calcularDesconto(valor, percentual) {
    return valor * percentual / 100;
}

const subtotal = 200;
const desconto = calcularDesconto(subtotal, 10);
const total = subtotal - desconto;

console.log(`Subtotal: R$ ${subtotal}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Total: R$ ${total}`);

function calcularMedia(nota1, nota2, nota3) {
    const total = nota1 + nota2 + nota3;
    const media = total / 3;

    return media;
}   

console.log(calcularMedia(70, 80, 90)); 

function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

exibirTabuada(5);
exibirTabuada(7);

function classificarTemperatura(temperatura) {
    if (temperatura < 10) {
        return "Muito frio";
    } else if (temperatura < 18) {
        return "Frio";
    } else if (temperatura < 26) {
        return "Agradável";
    } else if (temperatura < 32) {
        return "Quente";
    } else {
        return "Muito quente";
    }
}

console.log(classificarTemperatura(5));
console.log(classificarTemperatura(15));
console.log(classificarTemperatura(22));
console.log(classificarTemperatura(29));
console.log(classificarTemperatura(35));

function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

function calcularDesconto(valor, percentual) {
    return valor * percentual / 100;
}

function calcularTotal(subtotal, desconto) {
    return subtotal - desconto;
}

function classificarPedido(total) {
    if (total >= 200) {
        return "Pedido grande";
    } else {
        return "Pedido comum";
    }
}

for (let i = 1; i <= 3; i++) {
    const subtotal = calcularSubtotal(80, i);
    const desconto = calcularDesconto(subtotal, 10);
    const total = calcularTotal(subtotal, desconto);
    const classificacao = classificarPedido(total);

    console.log(`Pedido ${i}`);
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}
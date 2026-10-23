
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

const subtotal = preco * quantidade;
const desconto = subtotal * percentualDesconto / 100;
const total = subtotal - desconto;

console.log(`Subtotal: ${subtotal}`);
console.log(`Desconto: ${desconto}`);
console.log(`Total: ${total}`);

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

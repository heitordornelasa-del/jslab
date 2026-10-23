
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
// Nome: Caio Floriano Gonçalves		Data: 02/02/2022

// Teste básico de lógica de programação e JavaScript.

// 1. Qual o resultado desta expressão?
// 10 * 4 - 8 + 24/8 = 35

// 2. Qual a diferença entre os operadores == e === ? Quando usar um ou outro?
// O operador “==” é utilizado para verificar se o valor de uma variável é igual ao outro, independentemente do tipo da variável; já o operador “===” é utilizado para verificar se o valor e o tipo de uma variável são o mesmo.

// 3. Observe atentamente o algoritmo a seguir:
// Este algoritmo possui um erro. Que erro é esse?
// a) Erro de compilação
// b) Loop infinito
// c) Declaração incorreta de variáveis
// d) If sem Else


// 4. Analise o código e escreva qual o resultado será exibido ao lado da expressão "console.".
 console.log(1) = novoNumero = 9;
console.log(2) = a = 3;

// 5. Analise o código e escreva qual o resultado será exibido ao lado da expressão "console.".  
console.info(1) = false; 
console.info(2) = true;
console.dir(1) = ‘Maria’;
console.dir(2) = ‘Pedro’;
console.info(3) = false; 


// 6. Analise o trecho de código a seguir, e escreva qual o resultado das variáveis "x" "y” ao final da execução:
  X = 0,5; Y = 0,5.

// 7. Desenvolva um programa que calcule o IMC (Índice de massa corpórea) e mostre o resultado para o usuário.
// Tabela Resultados:
// Menor que 18: Abaixo do peso
// Menor que 25: Peso normal
// Maior que 25: Acima do peso
function calcIMC (a, p) {
	let imc = 0
	let aMetro = a / 100
	console.log(aMetro * aMetro)
	imc = p / (aMetro * aMetro);
	console.log(imc)
	if (imc < 18) {return 'Abaixo do Peso'}
	else if (imc > 18 && imc <= 25) {return 'Peso normal'}
	else if (imc > 30) {return 'Acima do Peso'}
}
// Para solicitar a função, basta utilizar o comando “calcIMC(‘altura’/’peso’)”

// 8. Faça uma função que calcule a média simples (aritmética) de 3 valores quaisquer. Além dessa, faça uma outra função que receba nenhum ou vários valores e calcule a média aritmética simples desses valores.
function calcMedia(x,y,z) {
    let media = (x+y+z)/3
    console.log('A média é ' + media )
}
//
function findMedia() {
  console.log(arguments)
  let soma = 0
  for(let i = 0; i < arguments.length; i++) {
    soma += arguments[i]
  }
  const media = soma / arguments.length
  return media;
}

// 9.Dada duas variáveis A e B, sendo A = 3 e B 5, escreva um código, SEM utilizar uma terceira variável, capaz de trocar o valor entre elas. Ao fim deste exemplo, as variáveis deverão ser iguais a: A 5 e B = 3
function varSwap(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    console.log (a, b)
}

// 10. Faça um programa que identifique se em um determinado vetor, existem ou não valores repetidos.
function repArray() {
  let arrayNoRepeat = []
  for(let i = 0; i < arguments.length; i++) {
    if (arrayNoRepeat.includes(arguments[i])) 
       return true
    else 
	  arrayNoRepeat.push(arguments[i])
  }
  return false;
}

// 11. Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:
// -	Entregar o menor número de notas;
// -	Só é possível sacar o valor solicitado com as notas disponíveis; 
// -	Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00
// Exemplos:
// Valor do Saque: R$ 30,00 Resultado Esperado: Entregar 1 nota de R$ 20,00 e 1 nota de R$ 10,00.
// Valor do Saque: R$ 80,00 — Resultado Esperado: Entregar 1 nota de R$ 50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00.
function caixaEletronico(valorSaque) {
  let arrayValoresCaixa = [100,50,20,10]
  let arrayValoresSaque = []
  for(let i = 0; i < arrayValoresCaixa.length; i++) {
	if (valorSaque >= arrayValoresCaixa[i]){
		arrayValoresSaque.push(arrayValoresCaixa[i])
		valorSaque -= arrayValoresCaixa[i]
	}
  }
  return arrayValoresSaque;
}

var nome = prompt("Qual o nome do aluno?")
var n1 = parseInt(prompt(`Qual a nota 1 do(a) ${nome}?`))
var n2 = parseInt(prompt(`Qual a nota 2 do(a) ${nome}?`))
var n3 = parseInt(prompt(`Qual a nota 3 do(a) ${nome}?`))
var p1 = parseInt(prompt(`Qual o peso da nota 1 do(a) ${nome}?`))
var p2 = parseInt(prompt(`Qual o peso da nota 2 do(a) ${nome}?`))
var p3 = parseInt(prompt(`Qual o peso da nota 3 do(a) ${nome}?`))

var nota1 = n1 * p1
var nota2 = n2 * p2
var nota3 = n3 * p3

var somaPesos = p1 + p2 + p3

var media = (nota1 + nota2 + nota3) / (somaPesos)

console.log(`A nota do aluno é ${media}`)
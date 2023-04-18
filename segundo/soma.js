// variaveis
num = [
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1]
]
soma = 0
soma2 = 0 
soma3 = 0
// variaveis

// jeito de um for
for (var i = 0; i < num.length; i++ ){
    soma = soma + num[0] [i]
    soma2 = soma2 + num[1] [i]
    soma3 = soma3 + num[2] [i]
}

soma4 = soma + soma2 + soma3
console.log(soma4)
// jeito de um for

// jeito de outro for
var fin = 0
for (let l = 0; l < num.length; l++){
    for (let u = 0; u < num.length; u++ ){
        fin = fin + num[l][u]
    }
}
console.log(fin)
// jeito de outro for

// jeito do sor
var numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

var soma = 0

for (var linha = 0; linha < numeros.length; linha++) {
    for(var coluna = 0; coluna < numeros[linha].length; coluna++) {
        soma = soma + numeros[linha][coluna]
    }
}

console.log(soma)
// jeito do sor
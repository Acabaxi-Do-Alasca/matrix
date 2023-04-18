var n = [
    [1,2,3,4],
    [1,2,3,4]
]
var m = []
var numer = 10
var som = 0

for (var x = 0; x < n.length; x++){
    var linha = []
    for (var y = 0; y < n[x].length; y++){
        som = numer * n[x][y]
        linha.push(som)
    }
    m.push(linha)
}
console.log(m)

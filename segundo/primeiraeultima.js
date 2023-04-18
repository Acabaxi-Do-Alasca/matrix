var normal = [[1,2,3,],[4,5,6,],[7,8,9]]
var girado = []
for (var y = 0; y < normal.length; y++){
    var linha = []
    for (var x = 0; x < normal[y].length; x++){
        linha.push(normal[x][y])}
    girado.push(linha)}
console.log(girado)
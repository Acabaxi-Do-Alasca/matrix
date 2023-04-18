var normal = [[1,2,3],[4,5,6],[7,8,9]]
        var trocado = []
        trocado.push(normal[normal.length - 1])
        for (let y = 1; y < normal.length - 1; y++){
            let linha = []
            for (let x = 0; x < normal[y].length; x++){
                linha.push(normal[y][x])}
            trocado.push(linha)}
        trocado.push(normal[0])
        console.log(normal)
        console.log(trocado)
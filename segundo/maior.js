var numeros = [[-3,-2,-1],[0],[1,2,3]]
        var menor = numeros[0][0]
        var maior = numeros[0][0]
        for (var y = 0; y < numeros.length; y++){
            for (var x = 0; x < numeros[y].length; x++){
                if (menor > numeros[y][x]){
                    menor = numeros[y][x]
                }
                if (maior < numeros[y][x]){
                    maior = numeros[y][x]
                }}}
        console.log(maior)
        console.log(menor)
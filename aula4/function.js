function somarValoresSemprePositivo(valorA, valorB){
    if(valorA < 0){
      valorA = valorA * -1;
    }
    if(valorB < 0){
      ValorB = Math.abs(valorB)
    }
    let somaDosValores = valorA + valorB
    return somaDosValores
  }
  
  let valorAForadaFuncao = 10
  let valorBForadaFuncao = 20
  
  let soma = somarValoresSemprePositivo(valorAForadaFuncao, valorBForadaFuncao)
  
  console.log(soma)
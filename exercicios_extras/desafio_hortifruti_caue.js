const produtosHortifruti = [
    { nome: 'Maçã', valor: '3.50', vencimento: '10/20/2024', peso: '1.00' },
    { nome: 'Banana', valor: '2.30', vencimento: '10/18/2024', peso: '1.20' },
    { nome: 'Laranja', valor: '4.20', vencimento: '10/25/2024', peso: '1.50' },
    { nome: 'Tomate', valor: '5.10', vencimento: '10/22/2024', peso: '1.00' },
    { nome: 'Cenoura', valor: '2.70', vencimento: '10/30/2024', peso: '0.80' },
    { nome: 'Batata', valor: '1.90', vencimento: '11/01/2024', peso: '1.50' },
    { nome: 'Cebola', valor: '3.00', vencimento: '11/05/2024', peso: '1.00' },
    { nome: 'Alface', valor: '2.50', vencimento: '10/28/2024', peso: '0.30' },
    { nome: 'Espinafre', valor: '3.80', vencimento: '10/27/2024', peso: '0.25' },
    { nome: 'Pepino', valor: '1.40', vencimento: '10/23/2024', peso: '0.50' },
    { nome: 'Pimentão', valor: '2.90', vencimento: '10/26/2024', peso: '0.70' },
    { nome: 'Brócolis', valor: '4.50', vencimento: '11/02/2024', peso: '0.80' },
    { nome: 'Abobrinha', valor: '3.20', vencimento: '10/31/2024', peso: '0.60' },
    { nome: 'Rúcula', valor: '5.50', vencimento: '11/03/2024', peso: '0.15' },
    { nome: 'Manga', valor: '3.80', vencimento: '11/04/2024', peso: '0.90' },
    { nome: 'Abacate', valor: '6.00', vencimento: '11/06/2024', peso: '0.50' },
    { nome: 'Morango', valor: '7.50', vencimento: '11/07/2024', peso: '0.30' },
    { nome: 'Uva', valor: '8.00', vencimento: '11/10/2024', peso: '0.50' },
    { nome: 'Melancia', valor: '4.80', vencimento: '11/11/2024', peso: '2.00' },
    { nome: 'Abóbora', valor: '5.20', vencimento: '11/12/2024', peso: '1.50' },
    { nome: 'Couve-flor', valor: '3.70', vencimento: '11/13/2024', peso: '1.20' },
    { nome: 'Limão', valor: '2.60', vencimento: '11/14/2024', peso: '0.40' },
    { nome: 'Coco', valor: '3.90', vencimento: '11/15/2024', peso: '1.50' },
    { nome: 'Pera', valor: '4.00', vencimento: '11/16/2024', peso: '0.80' },
    { nome: 'Kiwi', valor: '5.60', vencimento: '11/17/2024', peso: '0.25' },
    { nome: 'Jabuticaba', valor: '9.00', vencimento: '11/18/2024', peso: '0.30' },
    { nome: 'Cabelinho-de-velho', valor: '7.20', vencimento: '11/19/2024', peso: '0.50' },
    { nome: 'Cranberry', valor: '11.00', vencimento: '11/20/2024', peso: '0.15' },
    { nome: 'Maracujá', valor: '5.80', vencimento: '11/21/2024', peso: '0.40' },
    { nome: 'Framboesa', valor: '10.50', vencimento: '11/22/2024', peso: '0.20' },
    { nome: 'Cabelinho-de-velho', valor: '6.80', vencimento: '11/23/2024', peso: '0.30' },
    { nome: 'Pêssego', valor: '4.90', vencimento: '11/24/2024', peso: '0.90' },
    { nome: 'Nectarina', valor: '4.60', vencimento: '11/25/2024', peso: '0.85' },
];

//1 criar uma variavel que contenha todas as frutas cujo peso seja maior que 0.75
const frutasMaiorQue75 = []
 produtosHortifruti.forEach( function(produtoHortifruti) {
    if (Number(produtoHortifruti.peso) > 0.75){
        frutasMaiorQue75.push(produtoHortifruti)
         console.log(frutasMaiorQue75)

    }
//    console.log(`o produto atual e: ${JSON.stringify(produtoHortifruti)}`)
 })

 //console.log(`os produtos cujo peso eh maior que 0.75 sao: ${JSON.stringify(frutasMaiorQue75)}`)




 //2 cria uma variavel que pesquisa a hortifruti por nome.Essa variavel tem que ser um objeto contendo a fruta,
//caso a fruta nao exista ela tem que ser um valor undefined

function pesquisarFruta (nome){
    
    return produtosHortifruti.find(function(produtoHorti){
        return produtoHorti.nome === nome 
    })
}

console.log(`A fruta Pera ${pesquisarFruta('Pera')?'foi encontrado':'nao foi encontrado'}`)

// 3 criar uma variavel que retorne as frutas cujo o valor seja < 2

const frutasValor = []
produtosHortifruti.forEach( function(produtoHortifruti) {
    if (Number(produtoHortifruti.valor) < 2){
        frutasValor.push(produtoHortifruti)
    console.log(frutasValor)
    }
})
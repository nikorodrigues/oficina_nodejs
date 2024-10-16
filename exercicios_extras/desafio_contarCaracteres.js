// function ContarCaracteres(char){
//correcao: adicionado let
//     let cont = char
//     cont = char.length
//     return cont
// }

// console.log(ContarCaracteres('Meu Professor Caue Eh MoNxTroOoO !!!'))



/*
ATUALIZACAO DO CODIGO COM MELHORIA DE BOAS PRATICAS:
1- alterado NOME DA FUNCAO utilizando camelCase
2- incluido LET para declarar a variavel que sera atualizada posteriormente
3- simplificando: removido variavel intermediaria CONT, porque CONT armazena apenas o tamanho da string
4- alterado nomes globais de variaveis para nomes mais descritivos » cont -> tamanhoString
5- alterado variavel char -> caracteres. porque e DATATYPE em outras linguagens
*/

    function contarCaracteres(caracteres) {
        let tamanhoString = caracteres
        return caracteres.length
    }

    console.log(contarCaracteres('Meu Professor Caue Eh MoNxTroOoO !!!'))
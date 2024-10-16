/*
function         » Termo usado para executar uma funcao
CalcularQuadrado » nome descritivo criado para orientar a utilidade da funcao
(num)            » num e o parametro passado para a funcao, quando a funcao for chamada
passamos um valor, este valor e atribuido ao parametro num
*/
function CalcularQuadrado(num){
    /*
    let quadrado = num:
    LET      » termo usado para definir uma funcao em javascript(pode ser VAR ou CONST).
    QUADRADO » e o nome da variavel declarada, vai armazenar o valor de num temporariamente.
    NUM      » atribui o valor passado no parametro num a variavel quadrado, que passa a ter o mesmo valor de num.
    */
        let quadrado = num
    
    /*
    quadrado = num ** 2:
    QUADRADO            » REUTILIZA a variavel quadrado ja declarada, ATUALIZA o valor dela.
    NUM ** 2            » (**exponenciacao em JS), Logica utilizada para calcular o ² de um numero.
    quadrado = num ** 2 » Pega o resultado do calculo e atribui a variavel quadrado.
    */
        quadrado = num ** 2
    
    /*
    return quadrado:
    return   » Palavra-chave que faz a funcao retornar um valor. Significa que quando a funcao for chamada,
    vai "devolver" o valor especificado apos o RETURN para quem a chamou (chamada atraves do (4) ) geralmente p/ depuracao
    quadrado » Estamos dizendo que a funcao deve retornar o resultado do valor armazenado na variavel QUADRADO,
    que ainda nao sabemos » atraves do calculo: num**2 
    */
            return quadrado
    }
    
    /*
    console.log(CalcularQuadrado(4))
    CalcularQuadrado » estamos CHAMANDO a funcao (CalcularQuadrado), passando o numero 4 como ARGUMENTO,
    Significa que o parametro (num) da funcao sera 4 quando a funcao for EXECUTADA,
    O resultado de (CalcularQuadrado(4)) e o retorno da funcao, que sera o quadrado de 4, ou seja, 16
    */
    console.log(CalcularQuadrado(4))
    
    /*
    Resumo do fluxo:
    A função é definida. Ela aceita um número (num) como parâmetro, calcula o quadrado desse número e retorna o resultado.
    A função é chamada com o número 4. O valor de 4 é passado para o parâmetro num.
    Dentro da função, a variável quadrado é inicializada com o valor de num (4) e depois é atualizada com o quadrado desse valor (4 ** 2 = 16).
    A função retorna o valor 16.
    console.log exibe o valor 16 no console.
    */
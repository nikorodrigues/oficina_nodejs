// Objeto Livraria

/**
 * Objeto: Um objeto é uma coleção de pares de chave e valor. 
No caso de livraria, ele contém uma lista de livros (livros) e métodos que permitem adicionar, exibir e pesquisar livros.

* Array vazio livros[]: A chave livros começa como um array vazio 
onde iremos armazenar todos os livros adicionados à livraria.
 */
const livraria = {
    livros: [],

/**
* Método: Um método é uma função associada a um objeto. Neste caso, 
adicionarLivro é um método que pertence ao objeto livraria.

* Parâmetros: titulo e autor são os parâmetros do método, ou seja
são as informações que o usuário deve fornecer ao chamar a função.

* Criação do objeto livro: Dentro da função, criamos um novo objeto chamado livro
com as propriedades titulo e autor.

* Inserindo o livro no array: Usamos o método .push()
para adicionar o livro ao array livros da livraria.
 */    
    adicionarLivro: function(titulo, autor) {
        const livro = { titulo: titulo, autor: autor };
        this.livros.push(livro);
    },
/**
 * Condicional if: Verificamos se o array livros está vazio usando this.livros.length === 0.
Se estiver vazio, mostramos uma mensagem dizendo que não há livros.

Loop forEach: Se houver livros, usamos o método forEach() para iterar sobre o array e imprimir cada livro.
Para cada livro, exibimos o número na lista, o título e o autor.
 */
    exibirLivros: function() {
        if (this.livros.length === 0) {
            console.log("Nenhum livro disponível na livraria.");
        } else {
            console.log("Livros disponíveis na livraria:");
            this.livros.forEach((livro, index) => {
                console.log(`${index + 1}. Título: ${livro.titulo}, Autor: ${livro.autor}`);
            });
        }
    },

/**
* Parâmetro palavraChave: O termo de pesquisa que o usuário fornece.
* Conversão para minúsculas: Para tornar a pesquisa insensível a maiúsculas e minúsculas
convertemos o termo de pesquisa e os títulos/autores para letras minúsculas usando toLowerCase().
* Método filter(): O método filter() percorre o array de livros e retorna os que correspondem à pesquisa
Usamos o método includes() para verificar se o termo de pesquisa está contido no título ou autor.
* Condicional: Se livros forem encontrados, os exibimos;
se não, mostramos uma mensagem dizendo que nenhum livro foi encontrado.
 */
    pesquisarLivro: function(palavraChave) {
        // Converte o termo de pesquisa e o título dos livros para minúsculas para garantir a comparação correta
        const palavraChaveLower = palavraChave.toLowerCase();
        
        // Filtra livros cujo título contém a palavra chave
        const livrosEncontrados = this.livros.filter(livro => 
            livro.titulo.toLowerCase().includes(palavraChaveLower) || 
            livro.autor.toLowerCase().includes(palavraChaveLower) // Pesquisa também pelo autor
        );

        if (livrosEncontrados.length > 0) {
            console.log(`Livros encontrados com o termo "${palavraChave}":`);
            livrosEncontrados.forEach((livro, index) => {
                console.log(`${index + 1}. Título: ${livro.titulo}, Autor: ${livro.autor}`);
            });
        } else {
            console.log(`Nenhum livro encontrado com o termo "${palavraChave}".`);
        }
    }
};

// Testando o código da Livraria

// Adicionando livros
livraria.adicionarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien');
livraria.adicionarLivro('1984', 'George Orwell');
livraria.adicionarLivro('A Revolução dos Bichos', 'George Orwell');

// Exibindo todos os livros
livraria.exibirLivros();

// Pesquisando parcialmente (exemplo com parte do autor)
livraria.pesquisarLivro('George');  // Deve encontrar os livros "1984" e "A Revolução dos Bichos"

// Pesquisando parcialmente (exemplo com parte de um título)
livraria.pesquisarLivro('Senhor');  // Deve encontrar "O Senhor dos Anéis"

// Pesquisando um termo que não existe
livraria.pesquisarLivro('Harry');


/*
Conceitos Importantes:
* Objetos e Métodos: Um objeto agrupa propriedades (dados) e métodos (funções que podem manipular esses dados).
* Arrays: Usamos arrays para armazenar a lista de livros.
* Métodos Array (push(), forEach(), filter(), includes()):
Utilizamos métodos de array para adicionar, percorrer, filtrar e encontrar elementos.
* Condicionais: Verificamos condições com if para tratar diferentes cenários,
como verificar se há livros disponíveis ou se a pesquisa retornou resultados.
* Funções Anônimas: No caso do forEach() e filter(),
usamos funções anônimas para realizar uma ação em cada item do array.
*/
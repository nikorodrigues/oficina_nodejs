// Objeto Livraria
const livraria = {
    livros: [],

    adicionarLivro: function(titulo, autor) {
        const livro = { titulo: titulo, autor: autor };
        this.livros.push(livro);
    },

    exibirLivros: function() {
        if (this.livros.length === 0) {
            console.log("Nenhum livro disponível na livraria.");
        } else {
            console.log("Livros disponíveis na livraria:");
            this.livros.forEach((livro) => {
                console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
            });
        }
    },

    // Método atualizado para pesquisa parcial
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
            livrosEncontrados.forEach((livro) => {
                console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
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

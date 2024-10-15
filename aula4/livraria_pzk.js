// Crie uma livraria que adicione, exiba e pesquise livros

        /*
        const livro = { chave: variavel, chave: variavel }
        this        » especifica o array
        livros      » nome do array
        push()  	» comando para inserir um valor em um array
        push(livro) » insere o valor da variavel livro no array indicado
        */

const livraria = {
    livros: [],
    
    adicionarLivro: function(titulo, autor) {

        const livro = { titulo: titulo, autor: autor }; //criar um livro que contem titulo e autor
        this.livros.push(livro); //adiciona pelo push(um livro) ao array livros
    },

    exibirLivro: function() {
        this.livros.forEach((livro) => {
            console.log(`Titulo: ${livro.titulo}, Autor: ${livro.autor}`);
        });
    },

    pesquisarLivro: function(nome) {
    },    
}

livraria.adicionarLivro('Harry', 'J.K');
livraria.exibirLivro();
livraria.pesquisarLivro('Harry')
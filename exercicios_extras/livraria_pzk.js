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

    pesquisarLivro: function(titulo, autor) {
        const funcaoPesquisa = (livro) =>
            livro.titulo === titulo && livro.autor === autor
        console.log(`o tipo da variavel funcaoPesquisa eh: ${typeof funcaoPesquisa}`)

        return this.livros.find(funcaoPesquisa) 
    },    
}

livraria.adicionarLivro('Harry', 'J.K');
livraria.adicionarLivro('Senhor dos Aneis', 'J.R.R. Tolkien')
livraria.adicionarLivro('Goblin', 'Caue')
livraria.adicionarLivro('Logica de Programacao', 'Claudio Luis')
livraria.adicionarLivro('Programacao em Python', 'Eduardo Mendes')
// livraria.exibirLivro();
const livroEncontrado = livraria.pesquisarLivro('Logica de Programacao', 'Claudio Luis')
console.log(`o tipo da variavel livroEncontrado e ${typeof livroEncontrado}`)
console.log(`O livro ${livroEncontrado?'encontrado':'nao encontrado'} foi ${livroEncontrado?.titulo} do Autor ${livroEncontrado?.autor}`)
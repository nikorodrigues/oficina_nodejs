// Programa que exibe o nome de varios alunos de uma sala de aula

let nomes = [
  "Lucas", "Gabriel", "Eliza",
];

nomes[0] = "Joao";  // Troca "Lucas" por "Joao"
nomes.push("Lucas");  // Adiciona "Lucas" ao final da lista

for (let i = 0; i < nomes.length; i++) {  // Corrigido: 'length' e incremento de 'i'
  console.log("O aluno " + (i + 1) + " é o (a) " + nomes[i]);  // Corrigido: formatação
}

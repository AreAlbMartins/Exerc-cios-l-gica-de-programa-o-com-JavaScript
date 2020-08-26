 //; é facultativo

const nome = 'Reb';
const nome2 = "Maumau"
const nome3 = `Are e ${nome}`; // O `` identificam uma template string, ela permite colocar outra variável dentro de uma variável
console.log(nome3)

//Cálculo média nota alunos
const aluno1 = 'Maik'
const notaaluno1 = 9.8
const aluno2 = "Diego"
const notaaluno2 = 10
const aluno3 = 'Fulano'
const notaaluno3 = 2

media = (notaaluno1 + notaaluno2 + notaaluno3)/3
console.log(media)

console.log(typeof notaaluno1)

if (media > 5) {
    console.log (`A média foi ${media}. Parabéns!!!`)
} else {
    console.log ('A média foi menor que 5')
}

console.log(4 !== 4)


const pontos = 80

if (pontos <= 100 || pontos <= 50) {
    console.log("Você ganhou R$500,00")
} else {
    console.log("Não tem direito")
}




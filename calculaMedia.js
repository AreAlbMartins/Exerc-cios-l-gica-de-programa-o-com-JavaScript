//Criar um programa que calcula a média
//das turmas de alunos e envia
//mensagem do cálculo da média.

const turmaA = [
    {
        nome: 'Aretha',
        nota: 10
    },
    {
        nome: 'Rebecca',
        nota: 10
    },
    {
        nome: 'Maurício',
        nota: 9.8

    },
]

const turmaB = [
    
    {
        nome: 'Felipe',
        nota: 6
    },
    {
        nome: 'Isabel',
        nota: 9.8

    },
    {
        nome: 'Luan',
        nota: 10

    },
    {
        nome: 'Lirity',
        nota: 7

    },
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    } 
    
    const media = soma/alunos.length  
    return media
}
 
const media1 = calculaMedia(turmaA)
const media2 = calculaMedia(turmaB)


function enviaMensagem(media, turma){
     if (media > 5){
         console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
     } else {
         console.log(`A média da turma ${turma} é menor que 5.`)
     }
 }

 enviaMensagem(media1, 'turmaA')
 enviaMensagem(media2, 'turmaB')






















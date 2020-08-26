const programador = {
    nome: 'Aretha',
    idade: 35,
    tecnologias: [
    {
        nome: 'Python',
        especialidade: 'Data Science'
    },
    {
        nome: 'JavaScript',
        especialidade: 'Web/Mobile'
    }
]
        
}

console.log(`O profissional ${programador.nome} tem ${programador.idade} e trabalha com ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
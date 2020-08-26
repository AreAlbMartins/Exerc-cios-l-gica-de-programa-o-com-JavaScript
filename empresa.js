
const usuario = {
    nome: 'Diego',
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programacao',
        endereco:{
            rua: 'Guilherme',
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)
console.log(`A cor da logomarca é ${usuario.empresa.cor} e o foco é ${usuario.empresa.foco}`)


const usuarios = {
    nome: 'Diego',
    empresa: {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)
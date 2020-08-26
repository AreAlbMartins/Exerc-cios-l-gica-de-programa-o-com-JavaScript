const usuarios = [
    {
        nome: 'Aretha',
        receitas: [100.00, 200.00, 5.000, 700.00],
        despesas: [30.00, 50.50, 40.20, 27.50]
    },
    {
        nome: 'Mauricio',
        receitas: [100.00, 200.00, 5.000, 700.00],
        despesas: [30.00, 50.50, 40.20, 27.50]
    }, 
    {
        nome: 'Rebecca',
        receitas: [100.00, 200.00, 5.000, 700.00],
        despesas: [30.00, 50.50, 40.20, 27.50]
    }
]

function somaNumeros(numeros){
    let soma = 0

    for (let numero of numeros){
    soma= soma + numero
    }
    return soma
}


function calculoSaldo(receitas, despesas) {
    const saldoreceita = somaNumeros(receitas)
    const saldodespesa = somaNumeros(despesas)
    
    return saldoreceita - saldodespesa
}

for (let usuario of usuarios){
    const saldo = calculoSaldo(usuario.receitas, usuario.despesas)
    if (saldo > 0) {
    console.log(`O ${usuario.nome} está com saldo positivo de ${saldo}`)
}else{
    console.log(`O ${usuario.nome} está com saldo negativo de ${saldo}`)
}

}

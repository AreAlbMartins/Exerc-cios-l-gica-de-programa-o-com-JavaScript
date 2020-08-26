//Calculo IMC
const altura = 172
const peso = 67
const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log('Você está acima do peso!')
} else if (imc < 29.9) {
    console.log('Você está dentro do peso.')
}

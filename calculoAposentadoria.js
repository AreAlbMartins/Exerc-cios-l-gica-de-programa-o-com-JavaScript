const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
const calculo = idade + contribuicao
const homempodeaposentar = sexo == 'M' && contribuicao == 35 && calculo == 95
const mulherpodeaposentar = sexo == 'F' && contribuicao == 30 && calculo == 85
if (mulherpodeaposentar == true || homempodeaposentar == true) {
       console.log(`${nome} pode se aposentar!`)
  } else {
       console.log(`${nome} não pode se aposentar!`)
    // Condição 1 não passou
  }
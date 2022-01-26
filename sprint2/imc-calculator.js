
const show = str => console.log(str)

function imc(peso, altura) {
    let imc = peso / (altura ** 2)
    if (imc < 18.5) {
        show(`Seu IMC é de ${Number(imc).toFixed(2)}, portanto você está abaixo do seu peso ideal`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        show(`Seu IMC é de ${Number(imc).toFixed(2)}, portanto você está no seu peso ideal`)
    } else if (imc >= 25 && imc <= 29.9) {
        show(`Seu IMC é de ${Number(imc).toFixed(2)}, portanto você está com sobrepeso.`)
    } else if (imc >= 30 && imc <= 34.9) {
        show(`Seu IMC é de ${Number(imc).toFixed(2)}, portanto você está com obesidade grau 1`)
    } else if (imc >= 35 && imc <= 39.9) {
        show(`Seu IMC é de ${Number(imc).toFixed(2)}, portanto você está com obesidade grau 2`)
    } else if (imc > 40) {
        show(`Seu IMC é de ${Number(imc).toFixed(2)}, portanto você está com obesidade grau 3`)
    } 
}

imc(105, 1.83)
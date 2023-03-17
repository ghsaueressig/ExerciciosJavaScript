const cliente = {
    nome:"André",
    idade:36,
    cpf:123534652266,
    email:"andre@email.com"
}

const chaves =["nome","idade","cpf","email"]

console.log("Nome: "+cliente[chaves[0]])
console.log("Idade: "+cliente[chaves[1]])
console.log("CPF: "+cliente[chaves[2]])
console.log("Email : "+cliente[chaves[3]])

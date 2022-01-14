const listaDeChamada = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [listaDeChamada,mediaDosAlunos]

let i = 0
console.log(`\n`)
while (i < listaDeChamada.length){
    console.log(`${listaDeNotasEAlunos[0][i]}, a sua média é ${listaDeNotasEAlunos[1][i]}`)
    i++
}

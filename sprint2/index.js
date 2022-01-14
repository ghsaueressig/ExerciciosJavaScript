const notas = [10, 8, 6.5, 9.5]

let media = calculaMedia();

mostraNotas(notas)
console.log(`Media: ${media}`)

function calculaMedia() {
    let i = 0;
    let media = 0.0;
    while (i < notas.length) {
        media = media + notas[i];
        i++;
    }
    media = media / notas.length;
    return media;
}

function mostraNotas(notas) {
    let i = 0;
    console.log("Notas do semestre: ")
    while (i < notas.length) {
        console.log(`Nota ${i+1}: ${notas[i]}`)
        i++;
    }
}
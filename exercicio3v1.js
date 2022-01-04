const batman = {
    name: 'Batman',
    power: ''
} 

function showPower(objeto){
    objeto.power = "ser rico";
    objeto.carac = "planejamento tático avançado";
    return `O ${objeto.name} tem o poder de ${objeto.power} e ${objeto.carac}`
}

console.log(showPower(batman));
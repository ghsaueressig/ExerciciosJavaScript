const batman = {
    name: 'Batman',
    power: ''
} 

const showPowerNew = (objeto, name, power, carac) => {
    objeto.name = name;
    objeto.power = power;
    objeto.carac = carac;
    return `O ${objeto.name} tem o poder de ${objeto.power} e ${objeto.carac}`
}

console.log(showPowerNew(batman, "Batman", "ser rico", "possui preparo tático avançado"));
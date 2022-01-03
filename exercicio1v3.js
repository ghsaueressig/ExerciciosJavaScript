
function run(input){
    if (input != "Carro")
    {
        return false
    }
    else if (input === "Carro")
    {
        return true
    }
}

var v1 = "Carro";
var v2 = "Celular";
var v3 = 123;

console.log(run(v1));
console.log(run(v2));
console.log(run(v3));
let json = '{"name": "Batman"}';

let novoJson = {};

const convJsonNovo = input => {
    for (let [obj, val] of Object.entries(JSON.parse(input))) 
    {
        if(obj == "name")
        {
            val = "Aquaman";
        }
        novoJson
    [obj] = val;
    }
    return JSON.stringify(novoJson
    );
}

console.log(convJsonNovo(json));
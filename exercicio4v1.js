let json = '{"name": "Batman"}';

function convJson(input)
{
    input = JSON.parse(input);
    input.name = "Aquaman";
    return JSON.stringify(input);
}

console.log(convJson(json));
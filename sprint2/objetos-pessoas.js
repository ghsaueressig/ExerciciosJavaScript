const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

delete objPersonagem.aliado
console.log(objPersonagem.aliado) //undefined

const pessoa = {
  nome:"Bruce Banner",
  dataNascimento:"25/01/1980",
  carteiraIdentidade:"997776-X",
  email:"profbanner@email.com",
  telefone:"+552877776666",
  cidade:"Cachoeiro de Itapemirim",
  estado:"ES"
}

const heroi = {
  identidade:"Homem Aranha",
  nome:"Peter Parker",
  dataNascimento:"10/08/2001",
  cidade:"Nova York",
  estado:"NY",
  status:"Desaparecido e/ou identidade desconhecida"
}

console.log(heroi)

console.log(pessoa)

console.log(objPersonagem)
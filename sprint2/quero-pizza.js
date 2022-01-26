const show = str => console.log(str)

show(`Olá, seja bem vindo! Escolha a opção desejada: 
    1 - Tem Pizza?
    X - Encerrar
`)

let resposta = "1"

resposta === "1" ? show(`Temos sim, escolha a pizza de sua preferência.
    1 - Calabresa = R$ 25,00
    2 - Quatro Queijos = R$ 20,00
    3 - Universitária = R$ 35,00
    X - Voltar
    `) : resposta === "X" ? show("Ok, saindo.") : show("Não consegui entender o que você quis dizer.")

let escolha = "1"

switch (escolha) {
    case "1":
        show("Ótimo, será R$ 25,00.")
        break;
    case "2":
        show("Ótimo, será R$ 20,00.")
        break;
    case "3":
        show("Ótimo, será R$ 35,00.")
        break;
    case "X":
        show("Voltando...")
        break;
    default:
        show("Desculpe, opção inválida.")
        break;
}

show(`Escolha o meio de pagamento:
    1 - PIX
    2 - Cartão de Crédito
    3 - Cartão de Débito
    4 - Dinheiro
    X - Voltar
`)

let pagamento = "1"

switch (pagamento) {
    case "1":
        show(`Aqui está a nossa chave PIX: 4g5245i2gli455hkh2lk454ljkh5`)
        break;
    case "2":
    case "3":
        show(`Enviaremos a maquininha até você.`)
        break;
    case "4":
        shiw(`Ok, nosso motoboy cuidará do troco.`)
        break;
    case "X":
        show(`Retornando...`)
        break;
    default:
        show(`Desculpe, opção inválida.`)
        break;
}

show(`Envie seu endereço para que possamos entregar o pedido:`)

let enredeço = "Rua Doralino Leusin"

let mensagem = "Pagamento realizado"

mensagem === "Pagamento realizado" && enredeço !== "" ? show(`Seu pedido estará pronto em breve, obrigado pela preferência!`) : show(`Desculpe, não conseguimos identificar o seu pagamento ou seu endereço está em branco.`)
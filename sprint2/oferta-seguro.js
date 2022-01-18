const cliente = 
{
    nome:"André",
    idade:36,
    cpf:123534652266,
    email:"andre@email.com",
    fones:["5591235498","5521988743124"],
    dependentes:
    [
        {
        nome:"Sara Silva",
        parentesco:"filha",
        dataNasc:"20/03/2011",},
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNasc:"04/01/2014"}
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(cliente)
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)
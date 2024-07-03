
class pessoa
{   
    //Variáveis tipo caracteristicas
    _nome    //tipo string
    _idade   //tipo int
    _peso    //tipo float
    _altura  //tipo float
    _imc //tipo float

    //Metodos
    constructor(nome, idade, peso, altura ){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
    }
}

//Instanciando novo objeto a partir da classe pessoa
let pessoa1 = new pessoa("Victor", 18, 63, 1.80)
let pessoa2 = new pessoa("Luan", 1, 55, 1.67)

console.log(pessoa1)
console.log(pessoa2)